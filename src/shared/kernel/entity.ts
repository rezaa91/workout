import {v4 as uuidv4} from 'uuid';

export abstract class BaseEntity {
  public readonly id: string;

  constructor() {
    this.id = uuidv4();
  }
}
