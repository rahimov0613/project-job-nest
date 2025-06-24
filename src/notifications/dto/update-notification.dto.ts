import {
  IsBoolean,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateNotificationDto {
  @ApiPropertyOptional({ type: Number, example: 1 })
  @IsOptional()
  @IsInt({ message: 'user_id must be an integer' })
  @Type(() => Number)
  user_id?: number;

  @ApiPropertyOptional({ type: String, example: 'new_message' })
  @IsOptional()
  @IsString({ message: 'notification_type must be a string' })
  notification_type?: string;

  @ApiPropertyOptional({ type: String, example: 'New Message' })
  @IsOptional()
  @IsString({ message: 'title must be a string' })
  title?: string;

  @ApiPropertyOptional({ type: String, example: 'Click to view message.' })
  @IsOptional()
  @IsString({ message: 'message must be a string' })
  message?: string;

  @ApiPropertyOptional({ type: Boolean, example: true })
  @IsOptional()
  @IsBoolean({ message: 'is_read must be a boolean' })
  @Type(() => Boolean)
  is_read?: boolean;

  @ApiPropertyOptional({ type: String, example: 'job' })
  @IsOptional()
  @IsString({ message: 'related_entity_type must be a string' })
  related_entity_type?: string;

  @ApiPropertyOptional({ type: Number, example: 55 })
  @IsOptional()
  @IsInt({ message: 'related_entity_id must be an integer' })
  @Type(() => Number)
  related_entity_id?: number;
}
