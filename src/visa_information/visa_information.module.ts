import { Module } from '@nestjs/common';
import { VisaInformationService } from './visa_information.service';
import { VisaInformationController } from './visa_information.controller';

@Module({
  controllers: [VisaInformationController],
  providers: [VisaInformationService],
})
export class VisaInformationModule {}
