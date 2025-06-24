import { IsInt, IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class UpdateJobSearchDto {
  @ApiPropertyOptional({ type: Number, example: 1 })
  @IsOptional()
  @IsInt({ message: 'user_id must be an integer' })
  @Type(() => Number)
  user_id?: number;

  @ApiPropertyOptional({ type: String, example: 'frontend developer' })
  @IsOptional()
  @IsString({ message: 'search_query must be a string' })
  search_query?: string;

  @ApiPropertyOptional({ type: String, example: 'Uzbekistan' })
  @IsOptional()
  @IsString({ message: 'country must be a string' })
  country?: string;

  @ApiPropertyOptional({ type: String, example: 'Samarkand' })
  @IsOptional()
  @IsString({ message: 'city must be a string' })
  city?: string;

  @ApiPropertyOptional({ type: String, example: 'IT' })
  @IsOptional()
  @IsString({ message: 'job_category must be a string' })
  job_catregory?: string;

  @ApiPropertyOptional({ type: String, example: 'senior' })
  @IsOptional()
  @IsString({ message: 'experience_level must be a string' })
  experience_level?: string;

  @ApiPropertyOptional({ type: String, example: 'remote' })
  @IsOptional()
  @IsString({ message: 'job_type must be a string' })
  job_type?: string;
}
