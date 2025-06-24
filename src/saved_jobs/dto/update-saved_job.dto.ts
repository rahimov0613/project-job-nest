import { IsInt, IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class UpdateSavedJobDto {
  @ApiPropertyOptional({ type: Number, example: 1 })
  @IsOptional()
  @IsInt({ message: 'user_id must be an integer' })
  @Type(() => Number)
  user_id?: number;

  @ApiPropertyOptional({ type: Number, example: 42 })
  @IsOptional()
  @IsInt({ message: 'job_id must be an integer' })
  @Type(() => Number)
  job_id?: number;

  @ApiPropertyOptional({ type: String, example: 'Updated notes for the saved job' })
  @IsOptional()
  @IsString({ message: 'notes must be a string' })
  notes?: string;
}
