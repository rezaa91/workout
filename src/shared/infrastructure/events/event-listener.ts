import EventEmitter from 'events';
import {AggregateRoot} from '@shared/kernel/aggregate';

export interface IHandler {
  topic: string;
  handler: (args: any) => void;
}

export class EventListener extends EventEmitter {

  public subscribe({topic, handler}: IHandler) {
    this.on(topic, handler);
  }

  public dispatchEvents(aggregateRoot: AggregateRoot) {
    aggregateRoot.domainEvents.forEach(event => {
      this.emit(event.topic, event.payload);
    });
    aggregateRoot.clearEvents();
  }
}

export default new EventListener();
