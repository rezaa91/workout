import {Express} from 'express';
import {EventListener} from '@shared/infrastructure/events/event-listener';
import {IModule} from '@shared/core/module';
import {workoutModule} from '@workout/workout.module';
import {analyticsModule} from '@analytics/analytics.module';

interface ModuleConfig {
  server: Express;
  eventListener: EventListener;
}

export function loadModules({server, eventListener}: ModuleConfig): IModule[] {
  const modules: IModule[] = [workoutModule, analyticsModule];

  modules.forEach(({basePath, router, subscribers}) => {
    if (router) {
      server.use(basePath, router);
    }

    subscribers.forEach(subscriber => eventListener.subscribe(subscriber));
  });

  return modules;
}
