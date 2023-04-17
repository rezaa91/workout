export interface ICommand {
  execute(...args: any): Promise<unknown>;
}
