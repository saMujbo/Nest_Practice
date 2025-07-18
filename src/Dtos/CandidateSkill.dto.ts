import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";


export class CreateCandidateSkillDto{

@ApiProperty()
@IsNumber()
CandidateId?:number;

@ApiProperty()
@IsNumber()
SkillId?:number;

}
