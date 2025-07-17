import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class CreateSkillsDto{
    @ApiProperty()
    @IsString()
    @IsOptional()
    Name?:string;

    @ApiProperty()
    @IsString()
    Icon?:string; 

}