import { IsBoolean, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateSkillDto {
    @IsInt()
    @IsNotEmpty()
    user_id: number

    @IsString()
    @IsNotEmpty()
    skill_name: string

    @IsString()
    proficiency: string

    @IsInt()
    year_of_experience: number

    @IsBoolean()
    is_certifield: boolean
}
