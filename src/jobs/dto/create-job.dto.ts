    import { IsBoolean, IsEnum, IsInt, IsNotEmpty, IsString } from "class-validator";

    export class CreateJobDto {
        @IsInt({ message: 'company_id must be an integer' })
        @IsNotEmpty({ message: 'company_id is required' })
        company_id: number;

        @IsString({ message: 'title must be a string' })
        @IsNotEmpty({ message: 'title is required' })
        title: string;

        @IsString({ message: 'description must be a string' })
        @IsNotEmpty({ message: 'description is required' })
        description: string;

        @IsString({ message: 'job_category must be a string' })
        @IsNotEmpty({ message: 'job_category is required' })
        job_category: string;

        @IsEnum(['full_time', 'part_time', 'contract', 'temporary', 'internship', 'remote'])
        @IsNotEmpty({ message: 'job_type is required' })
        job_type: 'full_time' | 'part_time' | 'contract' | 'temporary' | 'internship' | 'remote';

        @IsString({message:'loaction_country must be a string'})
        @IsNotEmpty({message:'location_country is required'})
        location_country: string;

        @IsString({message:'location_city must be a string'})
        @IsNotEmpty({message:'location_city is required'})
        location_city: string;

        @IsBoolean()
        is_remote_assistance:boolean;
        
        @IsBoolean()
        is_remote_possible: boolean;

        @IsString({message:'salary_currency must be a string'})
        salary_currency: string;

        @IsInt({message:'salary_min must be an integer'})
        salary_min: number;

        @IsInt({message:'salary_max must be an integer'})
        salary_max: number;

        @IsEnum(['hourly','weekly', 'monthly', 'yearly'])
        salary_period: 'hourly' | 'weekly' | 'monthly' | 'yearly';
            
        @IsEnum(['none','posible','available'])
        visa_sponsorship: 'none' | 'posible' | 'available';

        @IsEnum(['entry','mid','senior','executive'])
        experience_level: 'entry' | 'mid' | 'senior' | 'executive';

        @IsString({message:'education_requirement must be a string'})
        education_requirement: string;

        @IsInt({message:'posted_by must be an integer'})
        @IsNotEmpty({message:'posted_by is required'})
        posted_by: number;

        @IsEnum(['draft','published','closed','archived'])
        status: 'draft' | 'published' | 'closed' | 'archived';



        

    }
