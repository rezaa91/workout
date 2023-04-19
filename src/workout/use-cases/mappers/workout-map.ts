import {Workout} from "../../domain/entities/workout.entity";

interface Set {
  weight: number;
  repetitions: number;
}

export interface WorkoutResponse {
  name: string;
  sets: Set[];
}

export class WorkoutMap {

  public static toDto(workout: Workout): WorkoutResponse[] {
    const exercises = workout.exercises;

    return exercises.map(({name, sets}) => {
      return {
        name,
        sets: sets.map(({repetitions, weight}) => ({repetitions, weight}))
      }
    });
  }
}
