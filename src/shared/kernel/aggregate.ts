import {BaseEntity} from './entity';
import {IDomainEvent} from './domain.event';

export abstract class AggregateRoot extends BaseEntity {

  public domainEvents: IDomainEvent<unknown>[] = [];

  protected addEvent(event: IDomainEvent<unknown>) {
    this.domainEvents.push(event);
  }

  public clearEvents() {
    this.domainEvents = [];
  }
}
