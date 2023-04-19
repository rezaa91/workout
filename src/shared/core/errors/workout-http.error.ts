import {WorkoutError} from './workout.error';

/**
 * @description - only to be used in controllers as it relates to HTTP error codes
 */
export abstract class WorkoutHttpError extends WorkoutError {
  public readonly statusCode: number = 500;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}
