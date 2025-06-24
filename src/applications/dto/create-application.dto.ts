import { Type } from "class-transformer";
import { IsDate, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateApplicationDto {
    @IsInt({ message: 'job_id must be an integer' })
    @IsNotEmpty({ message: 'job_id is required' })
    job_id: number;

    @IsInt({ message: 'user_id must be an integer' })
    @IsNotEmpty({ message: 'user_id is required' })
    user_id: number;

    @IsInt({ message: 'resume_id must be an integer' })
    @IsNotEmpty({ message: 'resume_id is required' })
    resume_id: number;

    @IsString({ message: 'cover_letter must be a string' })
    cover_letter: string;

    @IsEnum(['submitted', 'under_review', 'shortlisted', 'interviewing', 'rejected', 'withdrawn', 'hired'], { message: 'status must be one of the predefined values' })
    @IsOptional()
    status?: 'submitted' | 'under_review' | 'shortlisted' | 'interviewing' | 'rejected' | 'withdrawn' | 'hired';

    @IsDate({ message: 'application_date must be a valid date' })
    @IsOptional()
    @Type(() => Date)
    application_date?: Date;

    @IsDate({ message: 'last_updated must be a valid date' })
    @IsOptional()
    @Type(() => Date)
    updated_at?: Date;

    @IsString({ message: 'notes must be a string' })
    notes: string


}
