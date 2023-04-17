import {Workout} from '../../domain/entities/workout.entity';

export interface IWorkoutRepository {
  getWorkout(id: string): Promise<Workout>;
  saveWorkout(workout: Workout): Promise<void>;
  updateWorkout(workout: Workout): Promise<void>;
  deleteWorkout(workout: Workout): Promise<void>;
}
