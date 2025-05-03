import { Module } from '@nestjs/common';
import { UserAddressesService } from './user_addresses.service';
import { UserAddressesController } from './user_addresses.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [UserAddressesController],
  providers: [UserAddressesService],
})
export class UserAddressesModule {}
