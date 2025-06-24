import { PartialType } from '@nestjs/swagger';
import { CreateCompanyLocationDto } from './create-company_location.dto';
import { IsBoolean, IsInt,  IsOptional, IsString } from "class-validator";


export class UpdateCompanyLocationDto extends PartialType(CreateCompanyLocationDto) {
    @IsInt({ message: 'company_id must be an integer' })
    @IsOptional()
    company_id?: number;

    @IsString({ message: 'country must be a string' })
    @IsOptional()
    country?: string;

    @IsString({ message: 'city must be a string' })
    @IsOptional()
    city?: string;

    @IsString({ message: 'address must be a string' })
    @IsOptional()
    address?: string;

    @IsBoolean({ message: 'is_headquarters must be a boolean' })
    @IsOptional()
    is_headquarters?: boolean;

    @IsOptional()
    phone_number?: string;

}
