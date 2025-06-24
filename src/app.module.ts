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
import { CompanyLocationsModule } from './company_locations/company_locations.module';
import { JobsModule } from './jobs/jobs.module';
import { JobRequirementsModule } from './job_requirements/job_requirements.module';
import { JobResponsibilitiesModule } from './job_responsibilities/job_responsibilities.module';
import { JobBenefitsModule } from './job_benefits/job_benefits.module';
import { ApplicationsModule } from './applications/applications.module';
import { ApplicationDocumentsModule } from './application_documents/application_documents.module';
import { InterviewsModule } from './interviews/interviews.module';
import { ContractsModule } from './contracts/contracts.module';
import { NotificationsModule } from './notifications/notifications.module';
import { SavedJobsModule } from './saved_jobs/saved_jobs.module';
import { JobSearchesModule } from './job_searches/job_searches.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true,}),UsersModule, UserAddressesModule, PrismaModule, ResumesModule, EducationsModule, WorkExperienceModule, SkillsModule, LanguagesModule, CertificationsModule, VisaInformationModule, CompaniesModule, CompanyLocationsModule, JobsModule, JobRequirementsModule, JobResponsibilitiesModule, JobBenefitsModule, ApplicationsModule, ApplicationDocumentsModule, InterviewsModule, ContractsModule, NotificationsModule, SavedJobsModule, JobSearchesModule, ],
  controllers: [AppController,],
  providers: [AppService,],
})
export class AppModule { }
