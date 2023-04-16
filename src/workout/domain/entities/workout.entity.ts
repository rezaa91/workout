import {AggregateRoot} from '@shared/kernel/aggregate';
import {Exercise} from './exercise.entity';
import {WorkoutCreated} from '../events/workout-created.event';

export class Workout extends AggregateRoot {

  public exercises: Exercise[] = [];

  public static copyWorkout(workout: Workout): Workout {
    const newWorkout = new Workout();
    newWorkout.exercises.push(...workout.exercises);

    return newWorkout;
  }

  public addExercise(exercise: Exercise): void {
    this.exercises.push(exercise);

    // TODO testing events
    this.addEvent(new WorkoutCreated({id: 1}));
  }

  public removeExercise(name: string): void {
    this.exercises = this.exercises.filter(exercise => exercise.name !== name);
  }

  public listExercises(): string[] {
    return this.exercises.map(exercise => exercise.name);
  }
}
