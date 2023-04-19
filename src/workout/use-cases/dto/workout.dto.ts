import {IsArray, ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';
import {ExerciseDto} from './exercise.dto';

export class WorkoutDto {
  @IsArray()
  @ValidateNested({each: true})
  @Type(() => ExerciseDto)
  public readonly exercises: ExerciseDto[];

  constructor(props: WorkoutDto) {
    this.exercises = props.exercises.map(exercise => new ExerciseDto(exercise));
  }
}
