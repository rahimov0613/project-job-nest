import { PartialType } from '@nestjs/swagger';
import { CreateVisaInformationDto } from './create-visa_information.dto';
import { IsBoolean, IsDate, IsInt, IsOptional, IsString } from "class-validator";


export class UpdateVisaInformationDto extends PartialType(CreateVisaInformationDto) {
    @IsInt()
    @IsOptional()
    user_id?: number;

    @IsString()
    @IsOptional()
    visa_type?: string;

    @IsString()
    @IsOptional()
    country?: string;

    @IsString()
    @IsOptional()
    status?: string;

    @IsDate()
    @IsOptional()
    expiry_date?: Date

    @IsBoolean()
    @IsOptional()
    is_multiple_entry?: boolean

    @IsString()
    @IsOptional()
    notes?: string
}
