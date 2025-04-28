import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsDate, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator"

enum status {
    active = 'active',
    inactive = 'inactive'
}

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsString()
    @IsOptional()
    first_name?: string

    @IsString()
    @IsOptional()
    last_name?: string

    @IsEmail()
    @IsOptional()
    email?: string

    @IsString()
    @IsOptional()
    password_hash?: string

    @IsString()
    @IsOptional()
    phone_number?: string

    @IsString()
    @IsOptional()
    country_code?: string

    @IsDate()
    @IsOptional()
    date_of_birth?: Date

    @IsString()
    @IsOptional()
    gender?: string

    @IsString()
    @IsOptional()
    profile_picture_url?: string
    
    @IsString()
    @IsOptional()
    bio?: string

    @IsDate()
    @IsOptional()
    created_at?: Date

    @IsDate()
    @IsOptional()
    updated_at?: Date

    @IsDate()
    @IsOptional()
    last_login_at?: Date

    @IsEnum(status)
    @IsOptional()
    status?: status
}
