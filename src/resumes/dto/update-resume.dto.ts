import { PartialType } from '@nestjs/mapped-types';
import { CreateResumeDto } from './create-resume.dto';
import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateResumeDto extends PartialType(CreateResumeDto) {

    @IsNumber()
    @IsOptional()
    user_id?: number;

    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    file_url?: string;

    @IsBoolean()
    @IsOptional()
    is_defalut?: boolean;

    @IsOptional()
    created_at?: Date;

    @IsOptional()
    updated_at?: Date;
}
