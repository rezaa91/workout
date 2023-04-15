import {Router} from 'express';
import {WorkoutController} from './controllers/workout.controller';
import {CreateWorkoutService} from '../use-cases/create-workout.service';

export function createRouter(): Router {
  const router = Router();

  router.post('/create', async (req, res) => {
    const service = new CreateWorkoutService();
    const controller = new WorkoutController(service);
    await controller.createWorkout();
  });

  return router;
}
