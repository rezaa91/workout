import {Router} from 'express';
import {validateOrReject} from 'class-validator';
import asyncHandler from 'express-async-handler';
import {WorkoutService} from '../use-cases/workout.service';
import {WorkoutDto} from '../use-cases/dto/workout.dto';
import {WorkoutRepository} from './repositories/workout.repository';

export function createRouter(): Router {
  const router = Router();

  const workoutRepository = new WorkoutRepository();
  const workoutService = new WorkoutService(workoutRepository);

  router.post('/', asyncHandler(async (req, res) => {
    const dto = new WorkoutDto(req.body);
    await validateOrReject(dto);
    res.json(await workoutService.createWorkout(dto));
  }));

  return router;
}
