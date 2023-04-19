import {join} from 'node:path';
import express, {Express} from 'express';
import bodyParser from 'body-parser';

export function createServer(): Express {
  const server = express();

  server.use(bodyParser.urlencoded({
    extended: true
  }));
  server.use(express.json());
  server.use(express.static(join(__dirname, '../../presentation')));

  server.get('/', (_req, res) => {
    res.sendFile(join(__dirname, '../../presentation/index.html'));
  });

  return server;
}
