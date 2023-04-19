import {IModule} from '@shared/core/module';
import {createRouter} from './infrastructure/workout.router';

export const workoutModule: IModule = {
  basePath: '/workout',
  router: createRouter(),
  subscribers: []
};
