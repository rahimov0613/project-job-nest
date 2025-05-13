import { IsBoolean, IsDate, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateVisaInformationDto {
    @IsInt()
    @IsNotEmpty()
    user_id: number;

    @IsString()
    @IsNotEmpty()
    visa_type: string;

    @IsString()
    @IsNotEmpty()
    country: string;

    @IsString()
    @IsNotEmpty()
    status:string;

    @IsDate()
    expiry_date:Date

    @IsBoolean()
    is_multiple_entry:boolean

    @IsString()
    notes:string
}
