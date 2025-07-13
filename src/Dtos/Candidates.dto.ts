import { IsEmail, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCandidateDto {

    @ApiProperty()
    @IsOptional()
    @IsString()
    Name?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    Surname1?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    Surname2?: string;

    @ApiProperty()
    @IsEmail()
    Email: string;

    @ApiProperty()
    @IsString()
    Password: string;
}
