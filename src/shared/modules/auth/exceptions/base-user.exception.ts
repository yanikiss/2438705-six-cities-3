import {HttpError} from '../../../libs/rest/index.js';
import {StatusCodes} from 'http-status-codes';

export class BaseUserException extends HttpError {
  constructor(httpStatusCode: number, message: string) {
    super(httpStatusCode, message);
  }
}


export class UserPasswordIncorrectException extends BaseUserException {
  constructor() {
    super(StatusCodes.UNAUTHORIZED, 'Incorrect user name or password');
  }
}

export class UserNotFoundException extends BaseUserException {
  constructor() {
    super(StatusCodes.NOT_FOUND, 'User not found');
  }
}
