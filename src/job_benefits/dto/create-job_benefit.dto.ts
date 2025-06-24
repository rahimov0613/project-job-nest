import { IsEnum, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateJobBenefitDto {
    @IsInt({ message: 'job_id must be an integer' })
    @IsNotEmpty({ message: 'job_id is required' })
    job_id: number;

    @IsEnum(['health', 'housing', 'transportation', 'bonus', 'training', 'other'])
    @IsNotEmpty({ message: 'benefit_type is required' })
    benefit_type: ['health', 'housing', 'transportation', 'bonus', 'training', 'other'];

    @IsString({ message: 'benefit_text must be a string' })
    description: string;

}
