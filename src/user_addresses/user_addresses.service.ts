import { Injectable } from '@nestjs/common';
import { CreateUserAddressDto } from './dto/create-user_address.dto';
import { UpdateUserAddressDto } from './dto/update-user_address.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserAddressesService {
  constructor(private readonly prisma: PrismaService) { }
  async create(createUserAddressDto: CreateUserAddressDto) {
    return await this.prisma.user_addresses.create({
      data: {
        user_id: createUserAddressDto.user_id,
        adress_line1: createUserAddressDto.adress_line1,
        adress_line2: createUserAddressDto.adress_line2,
        city: createUserAddressDto.city,
        state: createUserAddressDto.state,
        postal_code: createUserAddressDto.postal_code,
        country: createUserAddressDto.country,
        is_primary: createUserAddressDto.is_primary,
        created_at: createUserAddressDto.created_at,
      },
    });
  }

  findAll() {
    return this.prisma.user_addresses.findMany({});
  }

  findOne(id: number) {
    return this.prisma.user_addresses.findUnique({
      where: { id: id }
    });
  }

  update(id: number, dto: UpdateUserAddressDto) {
    return this.prisma.user_addresses.update({
      where: { id: id },
      data: dto
    })
  }

  remove(id: number) {
    return this.prisma.user_addresses.delete({
      where: { id: id }
    });
  }
}
