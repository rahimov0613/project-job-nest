import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UserAddressesModule } from './user_addresses/user_addresses.module';
import { PrismaModule } from './prisma/prisma.module';
import { ResumesModule } from './resumes/resumes.module';
import { EducationsModule } from './educations/educations.module';
import { WorkExperienceModule } from './work_experience/work_experience.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true,}),UsersModule, UserAddressesModule, PrismaModule, ResumesModule, EducationsModule, WorkExperienceModule,],
  controllers: [AppController,],
  providers: [AppService,],
})
export class AppModule { }
