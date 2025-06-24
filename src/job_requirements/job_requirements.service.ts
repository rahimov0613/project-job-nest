import { Injectable } from '@nestjs/common';
import { CreateJobRequirementDto } from './dto/create-job_requirement.dto';
import { UpdateJobRequirementDto } from './dto/update-job_requirement.dto';

@Injectable()
export class JobRequirementsService {
  create(createJobRequirementDto: CreateJobRequirementDto) {
    return 'This action adds a new jobRequirement';
  }

  findAll() {
    return `This action returns all jobRequirements`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jobRequirement`;
  }

  update(id: number, updateJobRequirementDto: UpdateJobRequirementDto) {
    return `This action updates a #${id} jobRequirement`;
  }

  remove(id: number) {
    return `This action removes a #${id} jobRequirement`;
  }
}
