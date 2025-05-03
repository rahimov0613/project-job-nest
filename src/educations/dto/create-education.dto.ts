import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateEducationDto {
    @IsNumber()
    @IsNotEmpty()
    user_id: number;

    @IsString()
    @IsNotEmpty()
    institution: string;

    @IsString()
    @IsNotEmpty()
    degree: string;

    @IsString()
    @IsNotEmpty()
    field_of_study: string;

    @IsDate()
    @IsNotEmpty()
    start_date: Date;

    @IsOptional()
    @IsDate()
    end_date?: Date;

    @IsString()
    @IsOptional()
    grade?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    country?: string;
}
