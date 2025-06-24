import { Module } from '@nestjs/common';
import { JobResponsibilitiesService } from './job_responsibilities.service';
import { JobResponsibilitiesController } from './job_responsibilities.controller';

@Module({
  controllers: [JobResponsibilitiesController],
  providers: [JobResponsibilitiesService],
})
export class JobResponsibilitiesModule {}
