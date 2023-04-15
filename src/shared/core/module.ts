import {Router} from 'express';

export interface IModule {
  basePath: string;
  router: Router;
}
