import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';

// Getting ValidationError from mongoose.Error
const { ValidationError } = mongoose.Error;

// Interface for error response structure
interface ErrorResponse {
  message: string;
  success: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
  stack?: string;
}

// Middleware for error handling
const errorHandler = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  err: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
): void => {
  const errorResponse: ErrorResponse = {
    message: err.message || 'Oops! Internal server error',
    success: false,
    error: err.name || 'Sorry, unknown error',
  };

  // Handle Mongoose ValidationError
  if (err instanceof ValidationError) {
    errorResponse.message = 'Validation failed';
    errorResponse.error = {
      name: err.name,
      errors: err.errors, // Mongoose validation errors
    };
  }

  // Include stack trace in development environment
  if (process.env.NODE_ENV === 'development') {
    errorResponse.stack = err.stack; // Add stack trace in dev mode
  }

  res.status(err.status || 500).json(errorResponse);
};
export default errorHandler;
