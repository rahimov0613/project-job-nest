import { IsInt, IsNotEmpty } from "class-validator";

export class CreateJobResponsibilityDto {
    @IsInt({ message: 'job_id must be an integer' })
    @IsNotEmpty({ message: 'job_id is required' })
    job_id: number;
    @IsInt({ message: 'responsibility_id must be an integer' })
    @IsNotEmpty({ message: 'responsibility_id is required' })
    responsibility_text: string;
    @IsInt({ message: 'priority must be an integer' })
    priority: number = 1;
}
