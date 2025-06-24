import { Injectable } from '@nestjs/common';
import { CreateJobSearchDto } from './dto/create-job_search.dto';
import { UpdateJobSearchDto } from './dto/update-job_search.dto';

@Injectable()
export class JobSearchesService {
  create(createJobSearchDto: CreateJobSearchDto) {
    return 'This action adds a new jobSearch';
  }

  findAll() {
    return `This action returns all jobSearches`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jobSearch`;
  }

  update(id: number, updateJobSearchDto: UpdateJobSearchDto) {
    return `This action updates a #${id} jobSearch`;
  }

  remove(id: number) {
    return `This action removes a #${id} jobSearch`;
  }
}
