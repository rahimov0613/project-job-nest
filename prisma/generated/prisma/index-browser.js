
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  first_name: 'first_name',
  last_name: 'last_name',
  email: 'email',
  password_hash: 'password_hash',
  phone_number: 'phone_number',
  country_code: 'country_code',
  date_of_birth: 'date_of_birth',
  gender: 'gender',
  profile_picture_url: 'profile_picture_url',
  bio: 'bio',
  created_at: 'created_at',
  updated_at: 'updated_at',
  last_login_at: 'last_login_at',
  status: 'status'
};

exports.Prisma.User_addressesScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  adress_line1: 'adress_line1',
  adress_line2: 'adress_line2',
  city: 'city',
  state: 'state',
  postal_code: 'postal_code',
  country: 'country',
  is_primary: 'is_primary',
  created_at: 'created_at'
};

exports.Prisma.ResumesScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  title: 'title',
  file_url: 'file_url',
  is_default: 'is_default',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.EducationsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  institution: 'institution',
  degree: 'degree',
  field_of_study: 'field_of_study',
  start_date: 'start_date',
  end_date: 'end_date',
  grade: 'grade',
  description: 'description',
  is_foreign_education: 'is_foreign_education',
  country: 'country'
};

exports.Prisma.Work_experiencesScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  company_name: 'company_name',
  position: 'position',
  location: 'location',
  country: 'country',
  start_date: 'start_date',
  end_date: 'end_date',
  is_current_job: 'is_current_job',
  description: 'description',
  is_foregin_experience: 'is_foregin_experience'
};

exports.Prisma.SkillsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  skill_name: 'skill_name',
  proficiency: 'proficiency',
  year_of_experience: 'year_of_experience',
  is_certifield: 'is_certifield'
};

exports.Prisma.LanguagesScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  languages: 'languages',
  proficiency: 'proficiency',
  is_primary: 'is_primary'
};

exports.Prisma.CertificationsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  name: 'name',
  issuing_organization: 'issuing_organization',
  issue_date: 'issue_date',
  expiration_date: 'expiration_date',
  credential_id: 'credential_id',
  credential_url: 'credential_url',
  is_foreign_certification: 'is_foreign_certification'
};

exports.Prisma.Visa_informationScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  visa_type: 'visa_type',
  country: 'country',
  status: 'status',
  expiry__date: 'expiry__date',
  is_multiple_entry: 'is_multiple_entry',
  notes: 'notes'
};

exports.Prisma.CompaniesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  industry: 'industry',
  founded_year: 'founded_year',
  website_url: 'website_url',
  logo_url: 'logo_url',
  headquarters_country: 'headquarters_country',
  company_siz: 'company_siz',
  is_verified: 'is_verified',
  created_at: 'created_at'
};

exports.Prisma.Company_locationsScalarFieldEnum = {
  id: 'id',
  company_id: 'company_id',
  country: 'country',
  city: 'city',
  address: 'address',
  is_headquarters: 'is_headquarters',
  phone_number: 'phone_number'
};

exports.Prisma.JobsScalarFieldEnum = {
  id: 'id',
  company_id: 'company_id',
  title: 'title',
  description: 'description',
  job_category: 'job_category',
  job_type: 'job_type',
  location_country: 'location_country',
  location_city: 'location_city',
  is_relocation_assistance: 'is_relocation_assistance',
  is_remote_possible: 'is_remote_possible',
  salary_currency: 'salary_currency',
  salary_min: 'salary_min',
  salary_max: 'salary_max',
  salary_period: 'salary_period',
  visa_sponsorship: 'visa_sponsorship',
  experience_level: 'experience_level',
  education_requirement: 'education_requirement',
  posted_by: 'posted_by',
  status: 'status',
  posted_at: 'posted_at',
  deadline: 'deadline',
  views_count: 'views_count'
};

exports.Prisma.Job_requirementsScalarFieldEnum = {
  id: 'id',
  job_id: 'job_id',
  requirement_type: 'requirement_type',
  requirement_text: 'requirement_text',
  is_mandatory: 'is_mandatory',
  priority: 'priority'
};

exports.Prisma.Job_responsibilitesScalarFieldEnum = {
  id: 'id',
  job_id: 'job_id',
  responsibility_text: 'responsibility_text',
  priority: 'priority'
};

exports.Prisma.Job_benefitsScalarFieldEnum = {
  id: 'id',
  job_id: 'job_id',
  benefit_type: 'benefit_type',
  description: 'description'
};

exports.Prisma.ApplicationsScalarFieldEnum = {
  id: 'id',
  job_id: 'job_id',
  user_id: 'user_id',
  resume_id: 'resume_id',
  cover_letter: 'cover_letter',
  status: 'status',
  applited_at: 'applited_at',
  updated_at: 'updated_at',
  notes: 'notes'
};

exports.Prisma.Application_documentsScalarFieldEnum = {
  id: 'id',
  application_id: 'application_id',
  document_type: 'document_type',
  file_url: 'file_url',
  uploaded_at: 'uploaded_at'
};

exports.Prisma.InterviewsScalarFieldEnum = {
  id: 'id',
  application_id: 'application_id',
  interview_type: 'interview_type',
  scheduled_time: 'scheduled_time',
  timezone: 'timezone',
  duration_minutes: 'duration_minutes',
  location: 'location',
  meeting_url: 'meeting_url',
  interview_name: 'interview_name',
  interview_position: 'interview_position',
  status: 'status',
  feedback: 'feedback',
  rating: 'rating',
  notes: 'notes',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ContactsScalarFieldEnum = {
  id: 'id',
  job_id: 'job_id',
  user_id: 'user_id',
  company_id: 'company_id',
  contact_type: 'contact_type',
  start_date: 'start_date',
  end_date: 'end_date',
  probation_period_months: 'probation_period_months',
  salary_amount: 'salary_amount',
  salary_currency: 'salary_currency',
  salary_payment_period: 'salary_payment_period',
  benefits_description: 'benefits_description',
  visa_sponsorship_details: 'visa_sponsorship_details',
  relocation_assistance_details: 'relocation_assistance_details',
  status: 'status',
  signed_at: 'signed_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.NotificationsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  notification_type: 'notification_type',
  title: 'title',
  message: 'message',
  is_read: 'is_read',
  related_entity_type: 'related_entity_type',
  related_entity_id: 'related_entity_id',
  created_at: 'created_at'
};

exports.Prisma.Saved_jobsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  job_id: 'job_id',
  saved_at: 'saved_at',
  notes: 'notes'
};

exports.Prisma.Job_searchesScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  search_query: 'search_query',
  country: 'country',
  city: 'city',
  job_catregory: 'job_catregory',
  experience_level: 'experience_level',
  job_type: 'job_type',
  created_at: 'created_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.userstatus = exports.$Enums.userstatus = {
  active: 'active',
  inactive: 'inactive'
};

exports.skillsstatus = exports.$Enums.skillsstatus = {
  beginner: 'beginner',
  intermediate: 'intermediate',
  advanced: 'advanced',
  expert: 'expert'
};

exports.proficiencylanguages = exports.$Enums.proficiencylanguages = {
  basic: 'basic',
  conversational: 'conversational',
  fluent: 'fluent',
  native: 'native'
};

exports.companySize = exports.$Enums.companySize = {
  SIZE_1_10: 'SIZE_1_10',
  SIZE_11_50: 'SIZE_11_50',
  SIZE_51_200: 'SIZE_51_200',
  SIZE_201_500: 'SIZE_201_500',
  SIZE_501_1000: 'SIZE_501_1000',
  SIZE_1001_5000: 'SIZE_1001_5000',
  SIZE_5000_PLUS: 'SIZE_5000_PLUS'
};

exports.jobType = exports.$Enums.jobType = {
  full_time: 'full_time',
  part_time: 'part_time',
  contact: 'contact',
  temporary: 'temporary',
  intership: 'intership',
  remote: 'remote'
};

exports.salaryPeriod = exports.$Enums.salaryPeriod = {
  hourly: 'hourly',
  weekly: 'weekly',
  monthly: 'monthly',
  yearly: 'yearly'
};

exports.visaSponsorship = exports.$Enums.visaSponsorship = {
  none: 'none',
  possible: 'possible',
  available: 'available'
};

exports.expLevel = exports.$Enums.expLevel = {
  entry: 'entry',
  mid: 'mid',
  senior: 'senior',
  execution: 'execution'
};

exports.jobStatus = exports.$Enums.jobStatus = {
  draft: 'draft',
  published: 'published',
  closed: 'closed'
};

exports.jobRequirements = exports.$Enums.jobRequirements = {
  skill: 'skill',
  educaiton: 'educaiton',
  experience: 'experience',
  languages: 'languages',
  certifiaction: 'certifiaction',
  other: 'other'
};

exports.jobBenefit = exports.$Enums.jobBenefit = {
  health: 'health',
  housing: 'housing',
  transportation: 'transportation',
  bonus: 'bonus',
  training: 'training',
  other: 'other'
};

exports.applicationStatus = exports.$Enums.applicationStatus = {
  submitted: 'submitted',
  under_review: 'under_review',
  shortlisted: 'shortlisted',
  interviewing: 'interviewing',
  rejected: 'rejected',
  withdrawn: 'withdrawn',
  hired: 'hired'
};

exports.appDocumentStatus = exports.$Enums.appDocumentStatus = {
  resume: 'resume',
  cover_letter: 'cover_letter',
  protfolio: 'protfolio',
  certificate: 'certificate',
  reference: 'reference',
  other: 'other'
};

exports.interviewType = exports.$Enums.interviewType = {
  phone: 'phone',
  video: 'video',
  in_person: 'in_person',
  assessment: 'assessment'
};

exports.interviewStatus = exports.$Enums.interviewStatus = {
  scheduled: 'scheduled',
  completed: 'completed',
  cancelled: 'cancelled',
  rescheduled: 'rescheduled'
};

exports.contactType = exports.$Enums.contactType = {
  full_time: 'full_time',
  part_time: 'part_time',
  fixed_term: 'fixed_term',
  intership: 'intership'
};

exports.contactSalaryPaymentPeriod = exports.$Enums.contactSalaryPaymentPeriod = {
  hourly: 'hourly',
  weekly: 'weekly',
  monthly: 'monthly',
  yearly: 'yearly'
};

exports.contactStatus = exports.$Enums.contactStatus = {
  draft: 'draft',
  active: 'active',
  terminated: 'terminated',
  completed: 'completed'
};

exports.Prisma.ModelName = {
  users: 'users',
  user_addresses: 'user_addresses',
  resumes: 'resumes',
  educations: 'educations',
  work_experiences: 'work_experiences',
  skills: 'skills',
  languages: 'languages',
  certifications: 'certifications',
  visa_information: 'visa_information',
  companies: 'companies',
  company_locations: 'company_locations',
  jobs: 'jobs',
  job_requirements: 'job_requirements',
  job_responsibilites: 'job_responsibilites',
  job_benefits: 'job_benefits',
  applications: 'applications',
  application_documents: 'application_documents',
  interviews: 'interviews',
  contacts: 'contacts',
  notifications: 'notifications',
  saved_jobs: 'saved_jobs',
  job_searches: 'job_searches'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
