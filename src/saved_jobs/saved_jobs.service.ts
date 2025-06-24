import { Injectable } from '@nestjs/common';
import { CreateSavedJobDto } from './dto/create-saved_job.dto';
import { UpdateSavedJobDto } from './dto/update-saved_job.dto';

@Injectable()
export class SavedJobsService {
  create(createSavedJobDto: CreateSavedJobDto) {
    return 'This action adds a new savedJob';
  }

  findAll() {
    return `This action returns all savedJobs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} savedJob`;
  }

  update(id: number, updateSavedJobDto: UpdateSavedJobDto) {
    return `This action updates a #${id} savedJob`;
  }

  remove(id: number) {
    return `This action removes a #${id} savedJob`;
  }
}
