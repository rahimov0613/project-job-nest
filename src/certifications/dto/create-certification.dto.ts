import { IsBoolean, IsDate, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateCertificationDto {
    @IsInt()
    @IsNotEmpty()
    user_id: number

    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    issuing_organization: string

    @IsDate()
    issue_date: Date

    @IsDate()
    expiration_date: Date

    @IsString()
    credential_id: string

    @IsString()
    credential_url: string

    @IsBoolean()
    is_foregin_certification: boolean
}
