import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateSavedJobDto {
  @ApiProperty({ type: Number, example: 1, description: 'ID of the user saving the job' })
  @IsInt({ message: 'user_id must be an integer' })
  @IsNotEmpty({ message: 'user_id is required' })
  @Type(() => Number)
  user_id: number;

  @ApiProperty({ type: Number, example: 42, description: 'ID of the saved job' })
  @IsInt({ message: 'job_id must be an integer' })
  @IsNotEmpty({ message: 'job_id is required' })
  @Type(() => Number)
  job_id: number;

  @ApiProperty({ type: String, example: 'Interesting position at a fast-growing startup' })
  @IsString({ message: 'notes must be a string' })
  @IsNotEmpty({ message: 'notes is required' })
  notes: string;
}
