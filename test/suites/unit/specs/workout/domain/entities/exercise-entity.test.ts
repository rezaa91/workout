import {Exercise} from '../../../../../../../src/workout/domain/entities/exercise.entity';
import {Set} from '../../../../../../../src/workout/domain/value-objects/set-vo';

describe('Exercise', function() {

  it('adds and lists sets', function() {
    const exercise = new Exercise('chest press');

    exercise.addSet(new Set(80, 10));
    exercise.addSet(new Set(90, 8));
    exercise.addSet(new Set(100, 6));

    expect(exercise.listSets()).toStrictEqual([
      'chest press 10 repetitions at 80',
      'chest press 8 repetitions at 90',
      'chest press 6 repetitions at 100',
    ]);
  });

  it('removes set', function() {
    const exercise = new Exercise('lat pulldown');
    exercise.addSet(new Set(55, 10));
    exercise.addSet(new Set(60, 10));
    exercise.addSet(new Set(65, 8));

    exercise.removeSet(1);

    expect(exercise.listSets()).toStrictEqual([
      'lat pulldown 10 repetitions at 55',
      'lat pulldown 8 repetitions at 65'
    ]);
  });
});
