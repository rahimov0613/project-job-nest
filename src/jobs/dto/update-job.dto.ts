import { PartialType } from '@nestjs/swagger';
import { CreateJobDto } from './create-job.dto';
import { IsBoolean, IsEnum, IsInt, IsOptional, IsString } from "class-validator";

export class UpdateJobDto extends PartialType(CreateJobDto) {
  @IsInt({ message: 'company_id must be an integer' })
  @IsOptional()
  company_id?: number;

  @IsString({ message: 'title must be a string' })
  @IsOptional()
  title?: string;

  @IsString({ message: 'description must be a string' })
  @IsOptional()
  description?: string;

  @IsString({ message: 'job_category must be a string' })
  @IsOptional()
  job_category?: string;

  @IsEnum(['full_time', 'part_time', 'contract', 'temporary', 'internship', 'remote'])
  @IsOptional()
  job_type?: 'full_time' | 'part_time' | 'contract' | 'temporary' | 'internship' | 'remote';

  @IsString({ message: 'loaction_country must be a string' })
  @IsOptional()
  location_country?: string;

  @IsString({ message: 'location_city must be a string' })
  @IsOptional()
  location_city?: string;

  @IsBoolean()
  @IsOptional()
  is_remote_assistance?: boolean;

  @IsBoolean()
  @IsOptional()
  is_remote_possible?: boolean;

  @IsString({ message: 'salary_currency must be a string' })
  @IsOptional()
  salary_currency?: string;

  @IsInt({ message: 'salary_min must be an integer' })
  @IsOptional()
  salary_min?: number;

  @IsInt({ message: 'salary_max must be an integer' })
  @IsOptional()
  salary_max?: number;

  @IsEnum(['hourly', 'weekly', 'monthly', 'yearly'])
  @IsOptional()
  salary_period?: 'hourly' | 'weekly' | 'monthly' | 'yearly';

  @IsEnum(['none', 'posible', 'available'])
  @IsOptional()
  visa_sponsorship?: 'none' | 'posible' | 'available';

  @IsEnum(['entry', 'mid', 'senior', 'executive'])
  @IsOptional()
  experience_level?: 'entry' | 'mid' | 'senior' | 'executive';

  @IsString({ message: 'education_requirement must be a string' })
  @IsOptional()
  education_requirement?: string;

  @IsInt({ message: 'posted_by must be an integer' })
  @IsOptional()
  posted_by?: number;

  @IsEnum(['draft', 'published', 'closed', 'archived'])
  @IsOptional()
  status?: 'draft' | 'published' | 'closed' | 'archived';

}
