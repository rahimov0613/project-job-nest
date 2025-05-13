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
import { SkillsModule } from './skills/skills.module';
import { LanguagesModule } from './languages/languages.module';
import { CertificationsModule } from './certifications/certifications.module';
import { VisaInformationModule } from './visa_information/visa_information.module';
import { CompaniesModule } from './companies/companies.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true,}),UsersModule, UserAddressesModule, PrismaModule, ResumesModule, EducationsModule, WorkExperienceModule, SkillsModule, LanguagesModule, CertificationsModule, VisaInformationModule, CompaniesModule, ],
  controllers: [AppController,],
  providers: [AppService,],
})
export class AppModule { }
