import { Injectable } from '@nestjs/common';
import { CreateVisaInformationDto } from './dto/create-visa_information.dto';
import { UpdateVisaInformationDto } from './dto/update-visa_information.dto';

@Injectable()
export class VisaInformationService {
  create(createVisaInformationDto: CreateVisaInformationDto) {
    return 'This action adds a new visaInformation';
  }

  findAll() {
    return `This action returns all visaInformation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} visaInformation`;
  }

  update(id: number, updateVisaInformationDto: UpdateVisaInformationDto) {
    return `This action updates a #${id} visaInformation`;
  }

  remove(id: number) {
    return `This action removes a #${id} visaInformation`;
  }
}
