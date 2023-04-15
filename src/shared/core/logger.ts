type Log = (message: string) => void;

export interface ILogger {

  debug: Log;

  info: Log;

  warn: Log;

  error: Log;
}
