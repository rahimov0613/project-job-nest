import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateJobSearchDto {
  @ApiProperty({ type: Number, example: 1, description: 'User ID who performed the search' })
  @IsInt({ message: 'user_id must be an integer' })
  @IsNotEmpty({ message: 'user_id is required' })
  @Type(() => Number)
  user_id: number;

  @ApiProperty({ type: String, example: 'backend developer', description: 'Search keyword or phrase' })
  @IsString({ message: 'search_query must be a string' })
  @IsNotEmpty({ message: 'search_query is required' })
  search_query: string;

  @ApiProperty({ type: String, example: 'Uzbekistan' })
  @IsString({ message: 'country must be a string' })
  @IsNotEmpty({ message: 'country is required' })
  country: string;

  @ApiProperty({ type: String, example: 'Tashkent' })
  @IsString({ message: 'city must be a string' })
  @IsNotEmpty({ message: 'city is required' })
  city: string;

  @ApiProperty({ type: String, example: 'Software Engineering' })
  @IsString({ message: 'job_category must be a string' })
  @IsNotEmpty({ message: 'job_category is required' })
  job_catregory: string;

  @ApiProperty({ type: String, example: 'mid', description: 'Experience level (entry, mid, senior, etc.)' })
  @IsString({ message: 'experience_level must be a string' })
  @IsNotEmpty({ message: 'experience_level is required' })
  experience_level: string;

  @ApiProperty({ type: String, example: 'full_time' })
  @IsString({ message: 'job_type must be a string' })
  @IsNotEmpty({ message: 'job_type is required' })
  job_type: string;
}
