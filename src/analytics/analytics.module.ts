import {IModule} from '@shared/core/module';
import {WorkoutCreatedSubscriber} from './subscribers/workout-created.subscriber';

export const analyticsModule: IModule = {
  basePath: 'analytics',
  subscribers: [
    new WorkoutCreatedSubscriber()
  ]
};
