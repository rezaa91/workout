import {BaseController} from '@shared/infrastructure/controller';
import {WorkoutDto} from '@workout/use-cases/dto/workout.dto';
import {WorkoutRepository} from '../repositories/workout.repository';

export class WorkoutController extends BaseController {
  public repository = new WorkoutRepository();

  async createWorkout(dto: WorkoutDto) {
    return this.useCase.execute(dto, this.repository);
  }
}
