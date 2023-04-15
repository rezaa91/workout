import {AggregateRoot} from '@shared/aggregate';
import {Exercise} from './exercise.entity';

export class Workout extends AggregateRoot {

  public exercises: Exercise[] = [];

  public static copyWorkout(workout: Workout): Workout {
    const newWorkout = new Workout();
    newWorkout.exercises.push(...workout.exercises);

    return newWorkout;
  }

  public addExercise(exercise: Exercise): void {
    this.exercises.push(exercise);
  }

  public removeExercise(name: string): void {
    this.exercises = this.exercises.filter(exercise => exercise.name !== name);
  }

  public listExercises(): string[] {
    return this.exercises.map(exercise => exercise.name);
  }
}
