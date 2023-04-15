import 'module-alias/register';
import 'reflect-metadata';

import * as dotenv from 'dotenv';
dotenv.config();

import {createServer} from './infrastructure/server';
import {getConfig} from './config';
import {errorHandler} from '@shared/infrastructure/express/middleware/error-handler';
import {Logger} from '@shared/infrastructure/logger';

import {workoutModule} from '@workout/workout.module';

(async() => {
  const logger = new Logger();
  const config = getConfig(process.env as any);
  const server = createServer();

  server.use(workoutModule.basePath, workoutModule.router);

  server.use(errorHandler);

  server.listen(config.app.port, function() {
    logger.info(`Now listening on port ${config.app.port}`);
  });
})();
