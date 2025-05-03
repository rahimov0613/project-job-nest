import { PartialType } from '@nestjs/mapped-types';
import { CreateEducationDto } from './create-education.dto';
import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";


export class UpdateEducationDto extends PartialType(CreateEducationDto) {
    @IsNumber()
    @IsOptional()
    user_id?: number;

    @IsString()
    @IsOptional()
    institution?: string;

    @IsString()
    @IsOptional()
    degree?: string;

    @IsString()
    @IsOptional()
    field_of_study?: string;

    @IsDate()
    @IsOptional()
    start_date?: Date;

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
