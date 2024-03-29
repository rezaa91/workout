import {WorkoutHttpError} from '@shared/core/errors/workout-http.error';
import {NextFunction, Request, Response} from 'express';

export function errorHandler(error: Error, _req: Request, res: Response, _next: NextFunction) {
  if (Array.isArray(error)) {
    // handle class-validator errors
    return res.status(400).json(error);
  }

  if (error instanceof WorkoutHttpError) {
    return res.status(error.statusCode).json({
      error: error.message,
      stack: error.stack
    });
  }

  return res.status(500).json({
    error: error.message,
    stack: error.stack
  });
}
