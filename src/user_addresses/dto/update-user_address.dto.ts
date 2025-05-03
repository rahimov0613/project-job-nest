import { PartialType } from '@nestjs/mapped-types';
import { CreateUserAddressDto } from './create-user_address.dto';
import { IsBoolean, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPort, IsString } from "class-validator"


export class UpdateUserAddressDto extends PartialType(CreateUserAddressDto) {
    @IsInt()
    @IsOptional()
    user_id: number;

    @IsString()
    @IsNotEmpty()
    adress_line1: string;

    @IsString()
    @IsOptional()
    adress_line2?: string;

    @IsString()
    @IsOptional()
    city: string;

    @IsString()
    @IsOptional()
    state?: string;

    @IsString()
    @IsOptional()
    postal_code?: string;

    @IsString()
    @IsOptional()
    country: string;

    @IsBoolean()
    @IsOptional()
    is_primary?: boolean;

    @IsOptional()
    created_at?: Date;
}
