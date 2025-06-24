import { IsBoolean, IsEnum, IsIn, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateJobRequirementDto {
    @IsInt({ message: 'job_id must be an integer' })
    @IsNotEmpty({ message: 'job_id is required' })
    job_id: number;

    @IsEnum(['skill', 'education', 'experience', 'language', 'certification'])
    @IsNotEmpty({ message: 'requirement_type is required' })
    requirement_type: ['skill', 'education', 'experience', 'language', 'certification']

    @IsString({ message: 'requirement_text must be a string' })
    requirement_text: string

    @IsBoolean({ message: 'is_required must be a boolean' })
    is_mandatory:boolean;

    @IsInt({ message: 'priority must be an integer' })
    priority: number = 1;

}