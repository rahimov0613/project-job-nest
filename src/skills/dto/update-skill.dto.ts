import { PartialType } from '@nestjs/swagger';
import { CreateSkillDto } from './create-skill.dto';
import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateSkillDto extends PartialType(CreateSkillDto) {
    @IsInt()
    @IsOptional()
    user_id?: number

    @IsString()
    @IsOptional()
    skill_name?: string

    @IsString()
    @IsOptional()
    proficiency?: string

    @IsInt()
    @IsOptional()
    year_of_experience?: number

    @IsBoolean()
    @IsOptional()
    is_certifield?: boolean
}
