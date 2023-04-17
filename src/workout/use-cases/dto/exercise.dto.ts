import {IsArray, ValidateNested, IsString, IsNumber} from 'class-validator';
import {Type} from 'class-transformer';

class Set {
  @IsNumber()
  public readonly weight: number;

  @IsNumber()
  public readonly repetitions: number;

  constructor(props: Set) {
    this.weight = props.weight;
    this.repetitions = props.repetitions;
  }
}

export class ExerciseDto {
  @IsString()
  public readonly name: string;

  @IsArray()
  @ValidateNested({each: true})
  @Type(() => Set)
  public readonly sets: Set[];

  constructor(props: ExerciseDto) {
    this.name = props.name;
    this.sets = props.sets?.map(set => new Set(set));
  }
}