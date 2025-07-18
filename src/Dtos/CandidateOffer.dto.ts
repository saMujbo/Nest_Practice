import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, isNumber, IsOptional } from "class-validator";

export class CandidateOfferDto{

    @ApiProperty()
    @IsNumber()
    CandidateId:number;

    @ApiProperty()
    @IsNumber()
    OfferId:number;
}