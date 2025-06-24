import { Module } from '@nestjs/common';
import { SavedJobsService } from './saved_jobs.service';
import { SavedJobsController } from './saved_jobs.controller';

@Module({
  controllers: [SavedJobsController],
  providers: [SavedJobsService],
})
export class SavedJobsModule {}
