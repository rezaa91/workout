import express, {Express} from 'express';

export function createServer(): Express {
  const server = express();

  return server;
}
