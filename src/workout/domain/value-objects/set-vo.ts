export class Set {

  constructor(
    public readonly weight: number,
    public readonly repetitions: number
  ) {}

  public updateReps(repetitions: number): Set {
    return new Set(this.weight, repetitions);
  }

  public updateWeight(weight: number): Set {
    return new Set(weight, this.repetitions);
  }
}
