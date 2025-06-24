import {
    IsDate,
    IsEnum,
    IsInt,
    IsOptional,
    IsString,
    Min,
} from 'class-validator';
import { Type } from 'class-transformer';

export enum ContactType {
    'full-time',
    'part-time',
    'fixed-term',
    'internship',
}

export enum SalaryPaymentPeriod {
    'hourly',
    'weekly',
    'monthly',
    'yearly',
}

export enum ContactStatus {
    'draft',
    'active',
    'terminated',
    'completed',
}

export class CreateContractDto {
    @IsInt()
    @Type(() => Number)
    job_id: number;

    @IsInt()
    @Type(() => Number)
    user_id: number;

    @IsInt()
    @Type(() => Number)
    company_id: number;

    @IsEnum(ContactType)
    contact_type: ContactType;

    @IsDate()
    @Type(() => Date)
    start_date: Date;

    @IsDate()
    @Type(() => Date)
    end_date: Date;

    @IsOptional()
    @IsInt()
    @Min(0)
    @Type(() => Number)
    probation_period_months?: number;

    @IsInt()
    @Min(0)
    @Type(() => Number)
    salary_amount: number;

    @IsString()
    salary_currency: string;

    @IsOptional()
    @IsEnum(SalaryPaymentPeriod)
    salary_payment_period?: SalaryPaymentPeriod;

    @IsOptional()
    @IsString()
    benefits_description?: string;

    @IsOptional()
    @IsString()
    visa_sponsorship_details?: string;

    @IsOptional()
    @IsString()
    relocation_assistance_details?: string;

    @IsOptional()
    @IsEnum(ContactStatus)
    status?: ContactStatus;

    @IsDate()
    @Type(() => Date)
    signed_at: Date;
}
