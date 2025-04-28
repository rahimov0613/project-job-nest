/*
  Warnings:

  - You are about to drop the column `is_mandatroy` on the `job_requirements` table. All the data in the column will be lost.
  - You are about to drop the column `coutry` on the `user_addresses` table. All the data in the column will be lost.
  - Added the required column `country` to the `user_addresses` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "users_email_key";

-- DropIndex
DROP INDEX "users_password_hash_key";

-- AlterTable
ALTER TABLE "application_documents" ALTER COLUMN "file_url" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "certifications" ALTER COLUMN "name" SET DATA TYPE TEXT,
ALTER COLUMN "issuing_organization" SET DATA TYPE TEXT,
ALTER COLUMN "credential_id" SET DATA TYPE TEXT,
ALTER COLUMN "credential_url" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "companies" ALTER COLUMN "name" SET DATA TYPE TEXT,
ALTER COLUMN "industry" SET DATA TYPE TEXT,
ALTER COLUMN "website_url" SET DATA TYPE TEXT,
ALTER COLUMN "logo_url" SET DATA TYPE TEXT,
ALTER COLUMN "headquarters_country" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "company_locations" ALTER COLUMN "country" SET DATA TYPE TEXT,
ALTER COLUMN "city" SET DATA TYPE TEXT,
ALTER COLUMN "phone_number" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "contacts" ALTER COLUMN "salary_currency" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "educations" ALTER COLUMN "institution" SET DATA TYPE TEXT,
ALTER COLUMN "degree" SET DATA TYPE TEXT,
ALTER COLUMN "field_of_study" SET DATA TYPE TEXT,
ALTER COLUMN "grade" SET DATA TYPE TEXT,
ALTER COLUMN "country" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "interviews" ALTER COLUMN "timezone" SET DATA TYPE TEXT,
ALTER COLUMN "location" SET DATA TYPE TEXT,
ALTER COLUMN "meeting_url" SET DATA TYPE TEXT,
ALTER COLUMN "interview_name" SET DATA TYPE TEXT,
ALTER COLUMN "interview_position" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "job_requirements" DROP COLUMN "is_mandatroy",
ADD COLUMN     "is_mandatory" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "job_searches" ALTER COLUMN "search_query" SET DATA TYPE TEXT,
ALTER COLUMN "country" SET DATA TYPE TEXT,
ALTER COLUMN "city" SET DATA TYPE TEXT,
ALTER COLUMN "job_catregory" SET DATA TYPE TEXT,
ALTER COLUMN "experience_level" SET DATA TYPE TEXT,
ALTER COLUMN "job_type" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "jobs" ALTER COLUMN "title" SET DATA TYPE TEXT,
ALTER COLUMN "job_category" SET DATA TYPE TEXT,
ALTER COLUMN "location_country" SET DATA TYPE TEXT,
ALTER COLUMN "location_city" SET DATA TYPE TEXT,
ALTER COLUMN "salary_currency" SET DATA TYPE TEXT,
ALTER COLUMN "education_requirement" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "notifications" ALTER COLUMN "notification_type" SET DATA TYPE TEXT,
ALTER COLUMN "title" SET DATA TYPE TEXT,
ALTER COLUMN "related_entity_type" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "resumes" ALTER COLUMN "title" SET DATA TYPE TEXT,
ALTER COLUMN "file_url" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "skills" ALTER COLUMN "skill_name" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "user_addresses" DROP COLUMN "coutry",
ADD COLUMN     "country" TEXT NOT NULL,
ALTER COLUMN "adress_line1" SET DATA TYPE TEXT,
ALTER COLUMN "adress_line2" SET DATA TYPE TEXT,
ALTER COLUMN "city" SET DATA TYPE TEXT,
ALTER COLUMN "state" SET DATA TYPE TEXT,
ALTER COLUMN "postal_code" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "first_name" SET DATA TYPE TEXT,
ALTER COLUMN "last_name" SET DATA TYPE TEXT,
ALTER COLUMN "email" SET DATA TYPE TEXT,
ALTER COLUMN "password_hash" SET DATA TYPE TEXT,
ALTER COLUMN "phone_number" DROP NOT NULL,
ALTER COLUMN "phone_number" SET DATA TYPE TEXT,
ALTER COLUMN "country_code" DROP NOT NULL,
ALTER COLUMN "country_code" SET DATA TYPE TEXT,
ALTER COLUMN "date_of_birth" DROP NOT NULL,
ALTER COLUMN "gender" DROP NOT NULL,
ALTER COLUMN "gender" SET DATA TYPE TEXT,
ALTER COLUMN "profile_picture_url" DROP NOT NULL,
ALTER COLUMN "profile_picture_url" SET DATA TYPE TEXT,
ALTER COLUMN "bio" DROP NOT NULL,
ALTER COLUMN "updated_at" DROP DEFAULT,
ALTER COLUMN "last_login_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "visa_information" ALTER COLUMN "visa_type" SET DATA TYPE TEXT,
ALTER COLUMN "country" SET DATA TYPE TEXT,
ALTER COLUMN "status" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "work_experiences" ALTER COLUMN "company_name" SET DATA TYPE TEXT,
ALTER COLUMN "position" SET DATA TYPE TEXT,
ALTER COLUMN "location" SET DATA TYPE TEXT,
ALTER COLUMN "country" SET DATA TYPE TEXT;
