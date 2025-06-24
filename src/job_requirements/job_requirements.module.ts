import { Module } from '@nestjs/common';
import { JobRequirementsService } from './job_requirements.service';
import { JobRequirementsController } from './job_requirements.controller';

@Module({
  controllers: [JobRequirementsController],
  providers: [JobRequirementsService],
})
export class JobRequirementsModule {}
