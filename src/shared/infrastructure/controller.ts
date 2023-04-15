import {ICommand} from '@shared/core/command';

export abstract class BaseController {
  protected readonly useCase: ICommand;

  constructor(useCase: ICommand) {
    this.useCase = useCase;
  }
}
