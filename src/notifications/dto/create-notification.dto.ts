import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateNotificationDto {
  @ApiProperty({ type: Number, example: 1, description: 'ID of the user receiving the notification' })
  @IsInt({ message: 'user_id must be an integer' })
  @Type(() => Number)
  user_id: number;

  @ApiProperty({ type: String, example: 'new_message', description: 'Type of notification' })
  @IsString({ message: 'notification_type must be a string' })
  @IsNotEmpty({ message: 'notification_type is required' })
  notification_type: string;

  @ApiProperty({ type: String, example: 'You have a new message' })
  @IsString({ message: 'title must be a string' })
  @IsNotEmpty({ message: 'title is required' })
  title: string;

  @ApiProperty({ type: String, example: 'Click to view your new message.' })
  @IsString({ message: 'message must be a string' })
  @IsNotEmpty({ message: 'message is required' })
  message: string;

  @ApiProperty({ type: Boolean, example: false, default: false })
  @IsBoolean({ message: 'is_read must be a boolean' })
  @Type(() => Boolean)
  is_read: boolean;

  @ApiProperty({ type: String, example: 'job', description: 'Type of the related entity' })
  @IsString({ message: 'related_entity_type must be a string' })
  @IsNotEmpty({ message: 'related_entity_type is required' })
  related_entity_type: string;

  @ApiProperty({ type: Number, example: 101, description: 'ID of the related entity' })
  @IsInt({ message: 'related_entity_id must be an integer' })
  @Type(() => Number)
  related_entity_id: number;
}
