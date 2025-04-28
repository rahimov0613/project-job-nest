import { IsDate, IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator"
enum status {
    active = 'active',
    inactive = 'inactive'
}
export class CreateUserDto {
    @IsString()
    first_name: string

    @IsString()
    last_name: string

    @IsEmail()
    email: string

    @IsString()
    @IsNotEmpty()
    password_hash: string

    @IsString()
    @IsNotEmpty()
    phone_number: string

    @IsString()
    country_code: string

    @IsDate()
    date_of_birth: Date

    @IsString()
    gender: string

    @IsString()
    profile_picture_url: string

    @IsString()
    bio:string

    @IsDate()
    created_at: Date

    @IsDate()
    updated_at: Date

    @IsDate()
    last_login_at: Date

    @IsEnum(status)
    status: status
}
    

