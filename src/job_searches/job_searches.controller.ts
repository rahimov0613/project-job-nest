import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JobSearchesService } from './job_searches.service';
import { CreateJobSearchDto } from './dto/create-job_search.dto';
import { UpdateJobSearchDto } from './dto/update-job_search.dto';

@Controller('job-searches')
export class JobSearchesController {
  constructor(private readonly jobSearchesService: JobSearchesService) {}

  @Post()
  create(@Body() createJobSearchDto: CreateJobSearchDto) {
    return this.jobSearchesService.create(createJobSearchDto);
  }

  @Get()
  findAll() {
    return this.jobSearchesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jobSearchesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJobSearchDto: UpdateJobSearchDto) {
    return this.jobSearchesService.update(+id, updateJobSearchDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobSearchesService.remove(+id);
  }
}
