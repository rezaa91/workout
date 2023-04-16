import {IHandler} from '@shared/infrastructure/events/event-listener';

export class WorkoutCreatedSubscriber implements IHandler {

  public readonly topic = 'WorkoutCreated';

  public handler({id}: {id: number}) {
    console.log('ID is ' + id);
  }
}
