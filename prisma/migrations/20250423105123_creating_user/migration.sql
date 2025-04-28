-- CreateEnum
CREATE TYPE "userstatus" AS ENUM ('active', 'inactive');

-- CreateEnum
CREATE TYPE "skillsstatus" AS ENUM ('beginner', 'intermediate', 'advanced', 'expert');

-- CreateEnum
CREATE TYPE "proficiencylanguages" AS ENUM ('basic', 'conversational', 'fluent', 'native');

-- CreateEnum
CREATE TYPE "companySize" AS ENUM ('SIZE_1_10', 'SIZE_11_50', 'SIZE_51_200', 'SIZE_201_500', 'SIZE_501_1000', 'SIZE_1001_5000', 'SIZE_5000_PLUS');

-- CreateEnum
CREATE TYPE "jobType" AS ENUM ('full_time', 'part_time', 'contact', 'temporary', 'intership', 'remote');

-- CreateEnum
CREATE TYPE "salaryPeriod" AS ENUM ('hourly', 'weekly', 'monthly', 'yearly');

-- CreateEnum
CREATE TYPE "visaSponsorship" AS ENUM ('none', 'possible', 'available');

-- CreateEnum
CREATE TYPE "expLevel" AS ENUM ('entry', 'mid', 'senior', 'execution');

-- CreateEnum
CREATE TYPE "jobStatus" AS ENUM ('draft', 'published', 'closed');

-- CreateEnum
CREATE TYPE "jobRequirements" AS ENUM ('skill', 'educaiton', 'experience', 'languages', 'certifiaction', 'other');

-- CreateEnum
CREATE TYPE "jobBenefit" AS ENUM ('health', 'housing', 'transportation', 'bonus', 'training', 'other');

-- CreateEnum
CREATE TYPE "applicationStatus" AS ENUM ('submitted', 'under_review', 'shortlisted', 'interviewing', 'rejected', 'withdrawn', 'hired');

-- CreateEnum
CREATE TYPE "appDocumentStatus" AS ENUM ('resume', 'cover_letter', 'protfolio', 'certificate', 'reference', 'other');

-- CreateEnum
CREATE TYPE "interviewType" AS ENUM ('phone', 'video', 'in_person', 'assessment');

-- CreateEnum
CREATE TYPE "interviewStatus" AS ENUM ('scheduled', 'completed', 'cancelled', 'rescheduled');

-- CreateEnum
CREATE TYPE "contactType" AS ENUM ('full_time', 'part_time', 'fixed_term', 'intership');

-- CreateEnum
CREATE TYPE "contactSalaryPaymentPeriod" AS ENUM ('hourly', 'weekly', 'monthly', 'yearly');

-- CreateEnum
CREATE TYPE "contactStatus" AS ENUM ('draft', 'active', 'terminated', 'completed');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "first_name" VARCHAR NOT NULL,
    "last_name" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "password_hash" VARCHAR NOT NULL,
    "phone_number" VARCHAR NOT NULL,
    "country_code" VARCHAR NOT NULL,
    "date_of_birth" TIMESTAMP(3) NOT NULL,
    "gender" VARCHAR NOT NULL,
    "profile_picture_url" VARCHAR NOT NULL,
    "bio" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_login_at" TIMESTAMP(3) NOT NULL,
    "status" "userstatus" NOT NULL DEFAULT 'active',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_addresses" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "adress_line1" VARCHAR NOT NULL,
    "adress_line2" VARCHAR NOT NULL,
    "city" VARCHAR NOT NULL,
    "state" VARCHAR NOT NULL,
    "postal_code" VARCHAR NOT NULL,
    "coutry" VARCHAR NOT NULL,
    "is_primary" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_addresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resumes" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "title" VARCHAR NOT NULL,
    "file_url" VARCHAR NOT NULL,
    "is_default" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "resumes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "educations" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "institution" VARCHAR NOT NULL,
    "degree" VARCHAR NOT NULL,
    "field_of_study" VARCHAR NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "grade" VARCHAR NOT NULL,
    "description" TEXT NOT NULL,
    "is_foreign_education" BOOLEAN NOT NULL DEFAULT false,
    "country" VARCHAR NOT NULL,

    CONSTRAINT "educations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "work_experiences" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "company_name" VARCHAR NOT NULL,
    "position" VARCHAR NOT NULL,
    "location" VARCHAR NOT NULL,
    "country" VARCHAR NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "is_current_job" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT NOT NULL,
    "is_foregin_experience" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "work_experiences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skills" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "skill_name" VARCHAR NOT NULL,
    "proficiency" "skillsstatus" NOT NULL DEFAULT 'intermediate',
    "year_of_experience" INTEGER NOT NULL,
    "is_certifield" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "languages" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "languages" TEXT NOT NULL,
    "proficiency" "proficiencylanguages" NOT NULL,
    "is_primary" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "languages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "certifications" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "name" VARCHAR NOT NULL,
    "issuing_organization" VARCHAR NOT NULL,
    "issue_date" TIMESTAMP(3) NOT NULL,
    "expiration_date" TIMESTAMP(3) NOT NULL,
    "credential_id" VARCHAR NOT NULL,
    "credential_url" VARCHAR NOT NULL,
    "is_foreign_certification" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "certifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "visa_information" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "visa_type" VARCHAR NOT NULL,
    "country" VARCHAR NOT NULL,
    "status" VARCHAR NOT NULL,
    "expiry__date" TIMESTAMP(3) NOT NULL,
    "is_multiple_entry" BOOLEAN NOT NULL DEFAULT false,
    "notes" TEXT NOT NULL,

    CONSTRAINT "visa_information_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "companies" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "description" TEXT NOT NULL,
    "industry" VARCHAR NOT NULL,
    "founded_year" INTEGER NOT NULL,
    "website_url" VARCHAR NOT NULL,
    "logo_url" VARCHAR NOT NULL,
    "headquarters_country" VARCHAR NOT NULL,
    "company_siz" "companySize" NOT NULL DEFAULT 'SIZE_1_10',
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "company_locations" (
    "id" SERIAL NOT NULL,
    "company_id" INTEGER NOT NULL,
    "country" VARCHAR NOT NULL,
    "city" VARCHAR NOT NULL,
    "address" TEXT NOT NULL,
    "is_headquarters" BOOLEAN NOT NULL DEFAULT false,
    "phone_number" VARCHAR NOT NULL,

    CONSTRAINT "company_locations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jobs" (
    "id" SERIAL NOT NULL,
    "company_id" INTEGER NOT NULL,
    "title" VARCHAR NOT NULL,
    "description" TEXT NOT NULL,
    "job_category" VARCHAR NOT NULL,
    "job_type" "jobType" NOT NULL,
    "location_country" VARCHAR NOT NULL,
    "location_city" VARCHAR NOT NULL,
    "is_relocation_assistance" BOOLEAN NOT NULL DEFAULT false,
    "is_remote_possible" BOOLEAN NOT NULL DEFAULT false,
    "salary_currency" VARCHAR NOT NULL,
    "salary_min" INTEGER NOT NULL,
    "salary_max" INTEGER NOT NULL,
    "salary_period" "salaryPeriod" NOT NULL DEFAULT 'monthly',
    "visa_sponsorship" "visaSponsorship" NOT NULL DEFAULT 'none',
    "experience_level" "expLevel" NOT NULL DEFAULT 'mid',
    "education_requirement" VARCHAR NOT NULL,
    "posted_by" INTEGER NOT NULL,
    "status" "jobStatus" NOT NULL,
    "posted_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deadline" TIMESTAMP(3) NOT NULL,
    "views_count" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "jobs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "job_requirements" (
    "id" SERIAL NOT NULL,
    "job_id" INTEGER NOT NULL,
    "requirement_type" "jobRequirements" NOT NULL,
    "requirement_text" TEXT NOT NULL,
    "is_mandatroy" BOOLEAN NOT NULL DEFAULT true,
    "priority" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "job_requirements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "job_responsibilites" (
    "id" SERIAL NOT NULL,
    "job_id" INTEGER NOT NULL,
    "responsibility_text" TEXT NOT NULL,
    "priority" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "job_responsibilites_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "job_benefits" (
    "id" SERIAL NOT NULL,
    "job_id" INTEGER NOT NULL,
    "benefit_type" "jobBenefit" NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "job_benefits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "applications" (
    "id" SERIAL NOT NULL,
    "job_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "resume_id" INTEGER NOT NULL,
    "cover_letter" TEXT NOT NULL,
    "status" "applicationStatus" NOT NULL,
    "applited_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "notes" TEXT NOT NULL,

    CONSTRAINT "applications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "application_documents" (
    "id" SERIAL NOT NULL,
    "application_id" INTEGER NOT NULL,
    "document_type" "appDocumentStatus" NOT NULL,
    "file_url" VARCHAR NOT NULL,
    "uploaded_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "application_documents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "interviews" (
    "id" SERIAL NOT NULL,
    "application_id" INTEGER NOT NULL,
    "interview_type" "interviewType" NOT NULL,
    "scheduled_time" TIMESTAMP(3) NOT NULL,
    "timezone" VARCHAR NOT NULL,
    "duration_minutes" INTEGER NOT NULL DEFAULT 30,
    "location" VARCHAR NOT NULL,
    "meeting_url" VARCHAR NOT NULL,
    "interview_name" VARCHAR NOT NULL,
    "interview_position" VARCHAR NOT NULL,
    "status" "interviewStatus" NOT NULL,
    "feedback" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "notes" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "interviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contacts" (
    "id" SERIAL NOT NULL,
    "job_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "company_id" INTEGER NOT NULL,
    "contact_type" "contactType" NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "probation_period_months" INTEGER NOT NULL DEFAULT 3,
    "salary_amount" INTEGER NOT NULL,
    "salary_currency" VARCHAR NOT NULL,
    "salary_payment_period" "contactSalaryPaymentPeriod" NOT NULL DEFAULT 'monthly',
    "benefits_description" TEXT NOT NULL,
    "visa_sponsorship_details" TEXT NOT NULL,
    "relocation_assistance_details" TEXT NOT NULL,
    "status" "contactStatus" NOT NULL DEFAULT 'draft',
    "signed_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notifications" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "notification_type" VARCHAR NOT NULL,
    "title" VARCHAR NOT NULL,
    "message" TEXT NOT NULL,
    "is_read" BOOLEAN NOT NULL DEFAULT false,
    "related_entity_type" VARCHAR NOT NULL,
    "related_entity_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "saved_jobs" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "job_id" INTEGER NOT NULL,
    "saved_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "notes" TEXT NOT NULL,

    CONSTRAINT "saved_jobs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "job_searches" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "search_query" VARCHAR NOT NULL,
    "country" VARCHAR NOT NULL,
    "city" VARCHAR NOT NULL,
    "job_catregory" VARCHAR NOT NULL,
    "experience_level" VARCHAR NOT NULL,
    "job_type" VARCHAR NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "job_searches_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_password_hash_key" ON "users"("password_hash");

-- AddForeignKey
ALTER TABLE "user_addresses" ADD CONSTRAINT "user_addresses_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resumes" ADD CONSTRAINT "resumes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "educations" ADD CONSTRAINT "educations_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_experiences" ADD CONSTRAINT "work_experiences_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "skills" ADD CONSTRAINT "skills_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "languages" ADD CONSTRAINT "languages_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "certifications" ADD CONSTRAINT "certifications_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "visa_information" ADD CONSTRAINT "visa_information_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "company_locations" ADD CONSTRAINT "company_locations_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jobs" ADD CONSTRAINT "jobs_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_requirements" ADD CONSTRAINT "job_requirements_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "jobs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_responsibilites" ADD CONSTRAINT "job_responsibilites_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "jobs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_benefits" ADD CONSTRAINT "job_benefits_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "jobs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "applications" ADD CONSTRAINT "applications_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "jobs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "applications" ADD CONSTRAINT "applications_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "applications" ADD CONSTRAINT "applications_resume_id_fkey" FOREIGN KEY ("resume_id") REFERENCES "resumes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "application_documents" ADD CONSTRAINT "application_documents_application_id_fkey" FOREIGN KEY ("application_id") REFERENCES "applications"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "interviews" ADD CONSTRAINT "interviews_application_id_fkey" FOREIGN KEY ("application_id") REFERENCES "applications"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contacts" ADD CONSTRAINT "contacts_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "jobs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contacts" ADD CONSTRAINT "contacts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contacts" ADD CONSTRAINT "contacts_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "saved_jobs" ADD CONSTRAINT "saved_jobs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "saved_jobs" ADD CONSTRAINT "saved_jobs_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "jobs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_searches" ADD CONSTRAINT "job_searches_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
