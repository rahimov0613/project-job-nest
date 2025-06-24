import { Type } from "class-transformer";
import { IsDate, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, Min } from "class-validator";

export class CreateInterviewDto {
    @IsInt({ message: 'application_id must be an integer' })
    @IsNotEmpty({ message: 'application_id is required' })
    application_id: number;

    @IsEnum(['phone', 'video', 'in-person', 'assessment'])
    @IsNotEmpty({ message: 'interview_type is required' })
    interview_type: ['phone', 'video', 'in-person', 'assessment'];

    @IsDate({ message: 'scheduled_time must be a valid date' })
    @IsNotEmpty({ message: 'scheduled_time is required' })
    @Type(() => Date)
    scheduled_time: Date;

    @IsString({ message: 'timezone must be a string' })
    @IsNotEmpty({ message: 'timezone is required' })
    timezone: string;

    @IsInt({ message: 'duration_minutes must be an integer' })
    @Min(1, { message: 'duration_minutes must be at least 1 minute' })
    @Type(() => Number)
    duration_minutes?: number;

    @IsString({ message: 'location must be a string' })
    location: string;

    @IsString({ message: 'interviewer must be a string' })
    meeting_link: string;

    @IsString({ message: 'notes must be a string' })
    interviewer_name: string;

    @IsString({ message: 'notes must be a string' })
    interviewer_position: string;

    @IsEnum(['scheduled', 'completed', 'cancelled', 'rescheduled'])
    @IsOptional()
    status?: 'scheduled' | 'completed' | 'cancelled' | 'rescheduled';

    @IsString({ message: 'feedback must be a string' })
    feedback: string;

    @IsInt({ message: 'rating must be an integer' })
    rating: number;

    @IsString({ message: 'notes must be a string' })
    notes: string;

    @IsDate({ message: 'created_at must be a valid date' })
    @IsOptional()
    @Type(() => Date)
    created_at?: Date;

    @IsDate({ message: 'updated_at must be a valid date' })
    @IsOptional()
    @Type(() => Date)
    updated_at?: Date;

}
