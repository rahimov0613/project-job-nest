import { PartialType } from '@nestjs/swagger';
import { CreateCompanyDto } from './create-company.dto';
import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";


export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {
    @IsString()
    @IsOptional()
    name?: string

    @IsString()
    @IsOptional()
    description?: string

    @IsString()
    @IsOptional()
    industry?: string

    @IsInt()
    @IsOptional()
    founded_year?: number

    @IsString()
    @IsOptional()
    website_url?: string

    @IsString()
    @IsOptional()
    logo_url?: string

    @IsString()
    @IsOptional()
    headquarters_country?: string

    @IsEnum(['1-10', '11-50', '51-200', '201-500', '501-1000', '1001-5000', '5000+'])
    @IsOptional()
    company_size?: string
}
