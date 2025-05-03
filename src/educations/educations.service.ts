import { Injectable } from '@nestjs/common';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EducationsService {
  constructor(private readonly prisma: PrismaService) { }
  create(dto: CreateEducationDto) {
    return this.prisma.educations.create({
      data: {
        user_id: dto.user_id,
        institution: dto.institution,
        degree: dto.degree,
        field_of_study: dto.field_of_study,
        start_date: dto.start_date,
        end_date: dto.end_date,
        grade: dto.grade,
        description: dto.description,
        country: dto.country,
      }
    });
  }

  findAll() {
    return this.prisma.educations.findMany({});
  }

  findOne(id: number) {
    return this.prisma.educations.findUnique({
      where: { id: id }
    });
  }

  update(id: number, dto: UpdateEducationDto) {
    return this.prisma.educations.update({
      where: { id: id },
      data: dto
    });
  }

  remove(id: number) {
    return this.prisma.educations.delete({
      where: { id: id }
    })
  }
}
