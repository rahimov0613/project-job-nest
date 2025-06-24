import { Injectable } from '@nestjs/common';
import { CreateJobResponsibilityDto } from './dto/create-job_responsibility.dto';
import { UpdateJobResponsibilityDto } from './dto/update-job_responsibility.dto';

@Injectable()
export class JobResponsibilitiesService {
  create(createJobResponsibilityDto: CreateJobResponsibilityDto) {
    return 'This action adds a new jobResponsibility';
  }

  findAll() {
    return `This action returns all jobResponsibilities`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jobResponsibility`;
  }

  update(id: number, updateJobResponsibilityDto: UpdateJobResponsibilityDto) {
    return `This action updates a #${id} jobResponsibility`;
  }

  remove(id: number) {
    return `This action removes a #${id} jobResponsibility`;
  }
}
