import {WorkoutError} from '@shared/core/workout.error';
import {Request, Response} from 'express';

export function errorHandler(error: Error, _req: Request, res: Response) {
  if (error instanceof WorkoutError) {
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
