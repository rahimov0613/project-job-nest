import { IsBoolean, IsDate, IsEmail, IsEnum, IsIn, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPort, IsString } from "class-validator"


export class CreateUserAddressDto {
    @IsInt()
    @IsNotEmpty()
    user_id: number;

    @IsString()
    @IsNotEmpty()
    adress_line1: string;

    @IsString()
    @IsOptional()
    adress_line2?: string;

    @IsString()
    @IsNotEmpty()
    city: string;

    @IsString()
    @IsOptional()
    state?: string;

    @IsString()
    @IsOptional()
    postal_code?: string;

    @IsString()
    @IsNotEmpty()
    country: string;

    @IsBoolean()
    @IsOptional()
    is_primary?: boolean;

    @IsOptional()
    created_at?: Date;
}
