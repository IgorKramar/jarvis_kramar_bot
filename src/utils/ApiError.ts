import { HttpStatusCode } from 'axios';

class ApiError extends Error {
  statusCode: HttpStatusCode;
  isOperational: boolean;

  constructor(statusCode: HttpStatusCode, message: string, isOperational = true, stack = '') {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;