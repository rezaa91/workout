export interface IDomainEvent<TPayload> {
  topic: string;
  payload: TPayload;
}
