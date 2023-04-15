import {ILogger} from "@shared/core/logger";

export class Logger implements ILogger {

  public debug(message: string) {
    console.log(message);
  }

  public info(message: string) {
    console.log(message);
  }

  public warn(message: string) {
    console.warn(message);
  }

  public error(message: string) {
    console.error(message);
  }
}
