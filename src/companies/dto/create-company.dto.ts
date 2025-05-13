import { IsEnum, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateCompanyDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    description: string

    @IsString()
    industry: string

    @IsInt()
    founded_year: number

    @IsString()
    website_url: string

    @IsString()
    logo_url: string

    @IsString()
    @IsNotEmpty()
    headquarters_country: string

    @IsEnum(['1-10', '11-50', '51-200', '201-500', '501-1000', '1001-5000','5000+'])
    company_size: string
}
