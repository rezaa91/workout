import {BaseEntity} from '@shared/kernel/entity';
import {Set} from '../value-objects/set-vo';

export class Exercise extends BaseEntity {

  public readonly name: string;

  private sets: Set[] = [];

  constructor(name: string) {
    super();
    this.name = name;
  }

  public addSet(set: Set): void {
    this.sets.push(set);
  }

  public removeSet(order: number): void {
    this.sets = this.sets.filter((_set, i) => i !== order);
  }

  public listSets(): string[] {
    return this.sets.map(set => {
      return `${this.name} ${set.repetitions} repetitions at ${set.weight}`;
    })
  }
}
