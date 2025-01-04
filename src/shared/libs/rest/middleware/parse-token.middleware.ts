import { Middleware } from './middleware.interface.js';
import { TokenPayload } from '../../../modules/auth/index.js';
import { NextFunction, Request, Response } from 'express';
import { jwtVerify, JWTVerifyResult } from 'jose';
import { createSecretKey } from 'node:crypto';
import { HttpError } from '../errors/index.js';
import { StatusCodes } from 'http-status-codes';

function isTokenPayload(payload: unknown): payload is TokenPayload {
  return (
    (typeof payload === 'object' && payload !== null) &&
    ('email' in payload && typeof payload.email === 'string') &&
    ('name' in payload && typeof payload.name === 'string') &&
    ('id' in payload && typeof payload.id === 'string')
  );
}

export class ParseTokenMiddleware implements Middleware {
  private readonly secretKey: ReturnType<typeof createSecretKey>;

  constructor(private readonly jwtSecret: string) {
    this.secretKey = createSecretKey(this.jwtSecret, 'utf-8');
  }

  private async verifyToken(token: string): Promise<TokenPayload | null> {
    try {
      const { payload } = await jwtVerify(token, this.secretKey) as JWTVerifyResult;
      if (isTokenPayload(payload)) {
        return { ...payload };
      }
      return null;
    } catch (err) {
      if (err instanceof Error && err.message === 'jwt expired') {
        throw new HttpError(
          StatusCodes.UNAUTHORIZED,
          'Token expired',
          'ParseTokenMiddleware'
        );
      }
      console.error('JWT Verification Error:', err);
      throw new HttpError(
        StatusCodes.UNAUTHORIZED,
        'Invalid token',
        'ParseTokenMiddleware'
      );
    }
  }

  public async execute(req: Request, _res: Response, next: NextFunction): Promise<void> {
    const authorizationHeader = req.headers?.authorization;

    if (!authorizationHeader) {
      return next();
    }

    const tokenParts = authorizationHeader.split(' ');
    if(tokenParts.length < 2){
      return next(new HttpError(StatusCodes.UNAUTHORIZED, 'Invalid token format', 'ParseTokenMiddleware'));
    }

    const [, token] = tokenParts;

    try {
      const tokenPayload = await this.verifyToken(token);

      if(tokenPayload){
        req.tokenPayload = tokenPayload;
      }
      return next();

    } catch (error) {
      return next(error);
    }
  }
}

declare module 'express-serve-static-core' {
  interface Request {
    tokenPayload: TokenPayload;
  }
}
