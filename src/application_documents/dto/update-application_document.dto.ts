import { PartialType } from '@nestjs/swagger';
import { CreateApplicationDocumentDto } from './create-application_document.dto';
import { IsDate, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Type } from 'class-transformer';

export class UpdateApplicationDocumentDto extends PartialType(CreateApplicationDocumentDto) {
    @IsInt({ message: 'application_id must be a integer' })
    @IsOptional()
    application_id: number

    @IsEnum(['resume', 'cover_letter', 'portfolio', 'reference', 'certificate', 'other'])
    @IsOptional()
    document_type: ['resume', 'cover_letter', 'portfolio', 'reference', 'certificate', 'other'];

    @IsString({ message: 'file_url must be a string' })
    @IsOptional()
    file_url: string;

    @IsDate({ message: 'uploaded_at must be a valid date' })
    @IsOptional()
    @Type(() => Date)
    uploaded_at?: Date;
}
