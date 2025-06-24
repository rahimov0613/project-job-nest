import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JobRequirementsService } from './job_requirements.service';
import { CreateJobRequirementDto } from './dto/create-job_requirement.dto';
import { UpdateJobRequirementDto } from './dto/update-job_requirement.dto';

@Controller('job-requirements')
export class JobRequirementsController {
  constructor(private readonly jobRequirementsService: JobRequirementsService) {}

  @Post()
  create(@Body() createJobRequirementDto: CreateJobRequirementDto) {
    return this.jobRequirementsService.create(createJobRequirementDto);
  }

  @Get()
  findAll() {
    return this.jobRequirementsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jobRequirementsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJobRequirementDto: UpdateJobRequirementDto) {
    return this.jobRequirementsService.update(+id, updateJobRequirementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobRequirementsService.remove(+id);
  }
}
