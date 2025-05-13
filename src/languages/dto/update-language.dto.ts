import { PartialType } from '@nestjs/swagger';
import { CreateLanguageDto } from './create-language.dto';
import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";


export class UpdateLanguageDto extends PartialType(CreateLanguageDto) {
    @IsInt()
    @IsOptional()
    user_id?: number

    @IsString()
    @IsOptional()
    languages?: string

    @IsString()
    @IsOptional()
    proficiency?: string

    @IsBoolean()
    @IsOptional()
    is_primary?: boolean
}
