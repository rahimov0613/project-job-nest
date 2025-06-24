import { Injectable } from '@nestjs/common';
import { CreateJobBenefitDto } from './dto/create-job_benefit.dto';
import { UpdateJobBenefitDto } from './dto/update-job_benefit.dto';

@Injectable()
export class JobBenefitsService {
  create(createJobBenefitDto: CreateJobBenefitDto) {
    return 'This action adds a new jobBenefit';
  }

  findAll() {
    return `This action returns all jobBenefits`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jobBenefit`;
  }

  update(id: number, updateJobBenefitDto: UpdateJobBenefitDto) {
    return `This action updates a #${id} jobBenefit`;
  }

  remove(id: number) {
    return `This action removes a #${id} jobBenefit`;
  }
}
