import { PartialType } from '@nestjs/swagger';
import { CreateJobRequirementDto } from './create-job_requirement.dto';
import { IsBoolean, IsEnum,  IsInt, IsOptional, IsString } from "class-validator";


export class UpdateJobRequirementDto extends PartialType(CreateJobRequirementDto) {
      @IsInt({ message: 'job_id must be an integer' })
      @IsOptional()
        job_id?: number;
    
        @IsEnum(['skill', 'education', 'experience', 'language', 'certification'])
        @IsOptional()
        requirement_type?: ['skill', 'education', 'experience', 'language', 'certification']
    
        @IsString({ message: 'requirement_text must be a string' })
        requirement_text?: string
    
        @IsBoolean({ message: 'is_required must be a boolean' })
        is_mandatory?:boolean;
    
        @IsInt({ message: 'priority must be an integer' })
        priority?: number = 1;
}
