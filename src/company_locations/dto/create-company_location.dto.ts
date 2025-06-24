import { IsBoolean, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateCompanyLocationDto {

    @IsInt({message:'company_id must be an integer'})
    @IsNotEmpty({message:'company_id is required'})
    company_id: number;

    @IsString({message:'country must be a string'})
    @IsNotEmpty({message:'country is required'})
    country: string;

    @IsString({message:'city must be a string'})
    @IsNotEmpty({message:'city is required'})
    city: string;

    @IsString({message:'address must be a string'})
    address:string;
    
    @IsBoolean({message:'is_headquarters must be a boolean'})
    is_headquarters: boolean;
    
    phone_number: string;
}
