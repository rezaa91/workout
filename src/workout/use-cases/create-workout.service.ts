import {ICommand} from '@shared/core/command';
import {Exercise} from '@workout/domain/entities/exercise.entity';
import {Workout} from '@workout/domain/entities/workout.entity';
import eventListener from '@shared/infrastructure/events/event-listener';

export class CreateWorkoutService implements ICommand {

  public async execute(): Promise<void> {
    const workout = new Workout();
    workout.addExercise(new Exercise('Chest Press'));
    eventListener.dispatchEvents(workout);
  }
}