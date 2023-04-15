import {BaseController} from '@shared/infrastructure/controller';

export class WorkoutController extends BaseController {
  async createWorkout() {
    await this.useCase.execute();
  }
}
