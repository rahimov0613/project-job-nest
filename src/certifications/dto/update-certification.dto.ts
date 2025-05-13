import { PartialType } from '@nestjs/swagger';
import { CreateCertificationDto } from './create-certification.dto';
import { IsBoolean, IsOptional, IsDate, IsInt, IsNotEmpty, IsString } from "class-validator";


export class UpdateCertificationDto extends PartialType(CreateCertificationDto) {
    @IsInt()
    @IsOptional()
    user_id?: number

    @IsString()
    @IsOptional()
    name?: string

    @IsString()
    @IsOptional()
    issuing_organization?: string

    @IsDate()
    @IsOptional()
    issue_date?: Date

    @IsDate()
    @IsOptional()
    expiration_date?: Date

    @IsString()
    @IsOptional()
    credential_id?: string

    @IsString()
    @IsOptional()
    credential_url?: string

    @IsBoolean()
    @IsOptional()
    is_foregin_certification?: boolean
 }
