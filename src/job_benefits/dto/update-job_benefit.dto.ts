import { PartialType } from '@nestjs/swagger';
import { CreateJobBenefitDto } from './create-job_benefit.dto';
import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";


export class UpdateJobBenefitDto extends PartialType(CreateJobBenefitDto) {
    @IsInt({ message: 'job_id must be an integer' })
    @IsOptional()
    job_id?: number;

    @IsEnum(['health', 'housing', 'transportation', 'bonus', 'training', 'other'])
    @IsOptional()
    benefit_type?: ['health', 'housing', 'transportation', 'bonus', 'training', 'other'];

    @IsString({ message: 'benefit_text must be a string' })
    @IsOptional()
    description?: string;
}
