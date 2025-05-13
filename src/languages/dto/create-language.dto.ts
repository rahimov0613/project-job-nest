import { IsBoolean, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateLanguageDto {

    @IsInt()
    @IsNotEmpty()
    user_id: number

    @IsNotEmpty()
    @IsString()
    languages: string

    @IsString()
    proficiency:string

    @IsBoolean()
    is_primary:boolean
}
