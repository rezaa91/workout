import {Exercise} from '@workout/domain/entities/exercise.entity';
import {Workout} from '@workout/domain/entities/workout.entity';
import eventListener from '@shared/infrastructure/events/event-listener';
import {Set} from '../domain/value-objects/set-vo';
import {WorkoutDto} from './dto/workout.dto';
import {IWorkoutRepository} from './repositories/workout.repository';

export class WorkoutService {

  constructor(private readonly repository: IWorkoutRepository) {}

  public async createWorkout(dto: WorkoutDto): Promise<{id: string}> {
    const workout = new Workout();
    dto.exercises.forEach(({name, sets}) => {
      const exercise = new Exercise(name);
      sets.forEach(({weight, repetitions}) => exercise.addSet(new Set(weight, repetitions)));
      workout.addExercise(exercise);
    });
    await this.repository.saveWorkout(workout);
    eventListener.dispatchEvents(workout);

    return {id: workout.id};
  }
}