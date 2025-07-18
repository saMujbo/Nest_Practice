import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";


export class CreateOfferDto{
    @ApiProperty()
    @IsNumber()
    CompanyId:number;

    @ApiProperty()
    @IsString()
    Job:string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    Description:string;
}