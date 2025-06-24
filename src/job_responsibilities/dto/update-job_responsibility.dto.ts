import { PartialType } from '@nestjs/swagger';
import { CreateJobResponsibilityDto } from './create-job_responsibility.dto';
import { IsInt, IsNotEmpty, IsOptional } from "class-validator";

export class UpdateJobResponsibilityDto extends PartialType(CreateJobResponsibilityDto) {
    @IsInt({ message: 'job_id must be an integer' })
    @IsOptional()
    job_id?: number;
    @IsInt({ message: 'responsibility_id must be an integer' })
    @IsOptional()
    responsibility_text?: string;
    @IsInt({ message: 'priority must be an integer' })
    @IsOptional()
    priority?: number = 1;
}
