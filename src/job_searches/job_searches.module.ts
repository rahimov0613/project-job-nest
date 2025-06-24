import { Module } from '@nestjs/common';
import { JobSearchesService } from './job_searches.service';
import { JobSearchesController } from './job_searches.controller';

@Module({
  controllers: [JobSearchesController],
  providers: [JobSearchesService],
})
export class JobSearchesModule {}
