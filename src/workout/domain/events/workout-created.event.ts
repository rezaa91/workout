import {IDomainEvent} from '@shared/kernel/domain.event';

interface WorkoutCreatedPayload {
  id: number;
}

export class WorkoutCreated implements IDomainEvent<WorkoutCreatedPayload> {
  public readonly topic = WorkoutCreated.name;

  constructor(public readonly payload: WorkoutCreatedPayload) {}
}
