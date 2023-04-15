import {Workout} from '../../../../../../../src/workout/domain/entities/workout.entity';
import {Exercise} from '../../../../../../../src/workout/domain/entities/exercise.entity';

describe('Workout', function() {

  it('adds and lists exercises', function() {
    const workout = new Workout();

    workout.addExercise(new Exercise('chest press'));
    workout.addExercise(new Exercise('chin up'));

    expect(workout.listExercises()).toStrictEqual(['chest press', 'chin up']);
  });

  it('removes exercises', function() {
    const workout = new Workout();

    workout.addExercise(new Exercise('chest press'));
    workout.addExercise(new Exercise('chin up'));
    workout.removeExercise('chin up');

    expect(workout.listExercises()).toStrictEqual(['chest press']);
  });

  it('copies workout', function() {
    const workout1 = new Workout();
    workout1.addExercise(new Exercise('chest press'));

    const workout2 = Workout.copyWorkout(workout1);
    workout2.addExercise(new Exercise('seated press'));

    expect(workout1.listExercises()).toStrictEqual(['chest press']);
    expect(workout2.listExercises()).toStrictEqual(['chest press', 'seated press']);
  });
});
