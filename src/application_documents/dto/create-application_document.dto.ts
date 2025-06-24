import { Type } from "class-transformer";
import { IsDate, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateApplicationDocumentDto {
    @IsInt({ message: 'application_id must be a integer' })
    @IsNotEmpty({ message: 'addplication_id is required' })
    application_id: number

    @IsEnum(['resume', 'cover_letter', 'portfolio', 'reference', 'certificate', 'other'])
    @IsNotEmpty({ message: 'document_type is required' })
    document_type: ['resume', 'cover_letter', 'portfolio', 'reference', 'certificate', 'other'];

    @IsString({ message: 'file_url must be a string' })
    @IsNotEmpty({ message: 'file_url is required' })
    file_url: string;

    @IsOptional()
    @IsDate({ message: 'uploaded_at must be a valid date' })
    @Type(() => Date)
    uploaded_at?: Date;
}
