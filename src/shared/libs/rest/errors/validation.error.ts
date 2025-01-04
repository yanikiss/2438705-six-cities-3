import {HttpError} from './http-error.js';
import {ValidationErrorField} from '../types/validation-error-field.type.js';
import {StatusCodes} from 'http-status-codes';

export class ValidationError extends HttpError {
  public details: ValidationErrorField[] = [];

  constructor(message: string, errors: ValidationErrorField[]) {
    super(StatusCodes.BAD_REQUEST, message);
    this.details = errors;
  }
}
