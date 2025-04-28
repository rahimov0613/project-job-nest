import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UserAddressesModule } from './user_addresses/user_addresses.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UsersModule, UserAddressesModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 