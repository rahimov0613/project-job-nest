import {
    IsOptional,
    IsInt,
    IsDate,
    IsEnum,
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

export class UpdateContractDto {
    @IsOptional()
    @IsInt()
    @Type(() => Number)
    job_id?: number;

    @IsOptional()
    @IsInt()
    @Type(() => Number)
    user_id?: number;

    @IsOptional()
    @IsInt()
    @Type(() => Number)
    company_id?: number;

    @IsOptional()
    @IsEnum(ContactType)
    contact_type?: ContactType;

    @IsOptional()
    @IsDate()
    @Type(() => Date)
    start_date?: Date;

    @IsOptional()
    @IsDate()
    @Type(() => Date)
    end_date?: Date;

    @IsOptional()
    @IsInt()
    @Min(0)
    @Type(() => Number)
    probation_period_months?: number;

    @IsOptional()
    @IsInt()
    @Min(0)
    @Type(() => Number)
    salary_amount?: number;

    @IsOptional()
    @IsString()
    salary_currency?: string;

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

    @IsOptional()
    @IsDate()
    @Type(() => Date)
    signed_at?: Date;
}
