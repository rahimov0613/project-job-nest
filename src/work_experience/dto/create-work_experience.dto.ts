import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateWorkExperienceDto {
    @IsInt()
    @IsNotEmpty()
    user_id:number;

    @IsString()
    @IsNotEmpty()
    company_name:string;

    @IsString()
    @IsNotEmpty()
    position:string;

    @IsString()
    @IsOptional()
    location?:string;

    @IsString()
    @IsOptional()
    country?:string;
    
}
