import {IHandler} from '@shared/infrastructure/events/event-listener';
import {Router} from 'express';

export interface IModule {
  basePath: string;
  router?: Router;
  subscribers: IHandler[];
}
