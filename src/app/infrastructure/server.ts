import express, {Express} from 'express';
import bodyParser from 'body-parser';

export function createServer(): Express {
  const server = express();

  server.use(bodyParser.urlencoded({
    extended: true
  }));
  server.use(express.json());

  server.get('/', (_req, res) => {
    res.json('Workout!');
  });

  return server;
}
