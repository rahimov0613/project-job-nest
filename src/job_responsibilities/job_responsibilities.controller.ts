import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JobResponsibilitiesService } from './job_responsibilities.service';
import { CreateJobResponsibilityDto } from './dto/create-job_responsibility.dto';
import { UpdateJobResponsibilityDto } from './dto/update-job_responsibility.dto';

@Controller('job-responsibilities')
export class JobResponsibilitiesController {
  constructor(private readonly jobResponsibilitiesService: JobResponsibilitiesService) {}

  @Post()
  create(@Body() createJobResponsibilityDto: CreateJobResponsibilityDto) {
    return this.jobResponsibilitiesService.create(createJobResponsibilityDto);
  }

  @Get()
  findAll() {
    return this.jobResponsibilitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jobResponsibilitiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJobResponsibilityDto: UpdateJobResponsibilityDto) {
    return this.jobResponsibilitiesService.update(+id, updateJobResponsibilityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobResponsibilitiesService.remove(+id);
  }
}
