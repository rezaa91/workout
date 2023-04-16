import 'module-alias/register';
import 'reflect-metadata';

import * as dotenv from 'dotenv';
dotenv.config();

import '@shared/infrastructure/events/event-listener';
import {createServer} from './infrastructure/server';
import {errorHandler} from '@shared/infrastructure/express/middleware/error-handler';
import {Logger} from '@shared/infrastructure/logger';
import eventListener from '@shared/infrastructure/events/event-listener';
import {getConfig} from './config';
import {loadModules} from './modules';

(async() => {
  const logger = new Logger();
  const config = getConfig(process.env as any);
  const server = createServer();
  loadModules({server, eventListener});

  server.use(errorHandler);

  server.listen(config.app.port, function() {
    logger.info(`Now listening on port ${config.app.port}`);
  });
})();
