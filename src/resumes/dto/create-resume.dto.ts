import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateResumeDto {

    @IsNumber()
    @IsNotEmpty()
    user_id: number;

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    file_url: string;

    @IsBoolean()
    @IsOptional()
    is_defalut?: boolean;
    
    @IsOptional()
    created_at?: Date;

    @IsOptional()
    updated_at?: Date;
}

