import { Injectable } from '@nestjs/common';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ResumesService {
  constructor(private readonly prisma: PrismaService) { }
  create(dto: CreateResumeDto) {
    return this.prisma.resumes.create({
      data: {
        user_id: dto.user_id,
        title: dto.title,
        file_url: dto.file_url,
        is_default: dto.is_defalut,
        created_at: dto.created_at,
        updated_at: dto.updated_at,
      }
    })
  }

  findAll() {
    return this.prisma.resumes.findMany({});
  }

  findOne(id: number) {
    return this.prisma.resumes.findUnique({
      where: { id: id }
    });
  }

  update(id: number, dto: UpdateResumeDto) {
    return this.prisma.resumes.update({
      where: { id: id },
      data: dto
    })
  }

  remove(id: number) {
    return this.prisma.resumes.delete({
      where: { id: id }
    });
  }
}
