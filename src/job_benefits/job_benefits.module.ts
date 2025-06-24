import { Module } from '@nestjs/common';
import { JobBenefitsService } from './job_benefits.service';
import { JobBenefitsController } from './job_benefits.controller';

@Module({
  controllers: [JobBenefitsController],
  providers: [JobBenefitsService],
})
export class JobBenefitsModule {}
