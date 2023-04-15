import {Router} from 'express';
import {validateOrReject} from 'class-validator';
import asyncHandler from "express-async-handler";
import {WorkoutController} from './controllers/workout.controller';
import {CreateWorkoutService} from '../use-cases/create-workout.service';
import {WorkoutDto} from '../use-cases/dto/workout.dto';

export function createRouter(): Router {
  const router = Router();

  router.post('/', asyncHandler(async (req, res, next) => {
    const service = new CreateWorkoutService();
    const controller = new WorkoutController(service);

    const dto = new WorkoutDto(req.body);
    await validateOrReject(dto);
    res.json(await controller.createWorkout());
  }));

  return router;
}
