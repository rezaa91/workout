import {Workout} from '../../domain/entities/workout.entity';
import {IWorkoutRepository} from '../../use-cases/repositories/workout.repository';

export class WorkoutRepository implements IWorkoutRepository {

  public async getWorkout(id: string) {
    return new Workout();
  }

  public async saveWorkout(workout: Workout) {
  }

  public async updateWorkout(workout: Workout) {
  }

  public async deleteWorkout(workout: Workout) {
  }
}
