import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsOptional, IsString } from "class-validator";

export class CretaeCompanyDto{

        @ApiProperty()
        @IsOptional()
        @IsString()
        Name?:string;

        @ApiProperty()
        @IsOptional()
        @IsString()
        WebSite?:string;

        @ApiProperty()
        @IsEmail()
        Email?:string;

        @ApiProperty()
        @IsString()
        Password:string;
    }