import {mock} from 'jest-mock-extended';
import {WorkoutService} from '../../../../../../src/workout/use-cases/workout.service';
import {IWorkoutRepository} from '../../../../../../src/workout/use-cases/repositories/workout.repository';

describe('Workout Service', function() {

  let sut: WorkoutService;

  beforeEach(function() {
    const repository = mock<IWorkoutRepository>();
    sut = new WorkoutService(repository);
  });

  it('creates workout', async function() {
    const input = {
      exercises: [
        {
          name: 'bench press',
          sets: [
            {
              weight: 80,
              repetitions: 8
            },
            {
              weight: 80,
              repetitions: 8
            },
            {
              weight: 90,
              repetitions: 6
            }
          ]
        },
        {
          name: 'military press',
          sets: [
            {
              weight: 40,
              repetitions: 20
            },
            {
              weight: 40,
              repetitions: 20
            }
          ]
        }
      ]
    }

    const result = await sut.createWorkout(input);

    expect(result).toStrictEqual({
      id: expect.any(String),
      exercises: [
        {
          name: 'bench press',
          sets: [
            {
              weight: 80,
              repetitions: 8
            },
            {
              weight: 80,
              repetitions: 8
            },
            {
              weight: 90,
              repetitions: 6
            }
          ]
        },
        {
          name: 'military press',
          sets: [
            {
              weight: 40,
              repetitions: 20
            },
            {
              weight: 40,
              repetitions: 20
            }
          ]
        }
      ]
    })
  });
});
