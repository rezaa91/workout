import {IsArray, ValidateNested, IsString, IsNumber} from 'class-validator';
import {Type} from 'class-transformer';

class Set {
  @IsNumber()
  public readonly weight?: number;

  @IsNumber()
  public readonly repetitions?: number;

  constructor(props: Set) {
    this.weight = props.weight;
    this.repetitions = props.repetitions;
  }
}

class Exercise {
  @IsString()
  public readonly name?: string;

  @IsArray()
  @ValidateNested({each: true})
  @Type(() => Set)
  public readonly sets?: Set[];

  constructor(props: Exercise) {
    this.name = props.name;
    this.sets = props.sets?.map(set => new Set(set));
  }
}

export class WorkoutDto {
  @IsArray()
  @ValidateNested({each: true})
  @Type(() => Exercise)
  public readonly exercises: Exercise[];

  constructor(props: WorkoutDto) {
    this.exercises = props.exercises.map(exercise => new Exercise(exercise));
  }
}
