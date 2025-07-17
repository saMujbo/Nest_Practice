import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";


export class CreateOfferDto{
    @ApiProperty()
    CompanyId:string

    @ApiProperty()
    @IsString()
    Job:string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    Description:string;
}