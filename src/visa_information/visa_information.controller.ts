import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VisaInformationService } from './visa_information.service';
import { CreateVisaInformationDto } from './dto/create-visa_information.dto';
import { UpdateVisaInformationDto } from './dto/update-visa_information.dto';

@Controller('visa-information')
export class VisaInformationController {
  constructor(private readonly visaInformationService: VisaInformationService) {}

  @Post()
  create(@Body() createVisaInformationDto: CreateVisaInformationDto) {
    return this.visaInformationService.create(createVisaInformationDto);
  }

  @Get()
  findAll() {
    return this.visaInformationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.visaInformationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVisaInformationDto: UpdateVisaInformationDto) {
    return this.visaInformationService.update(+id, updateVisaInformationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.visaInformationService.remove(+id);
  }
}
