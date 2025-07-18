import { ApiProperty } from "@nestjs/swagger";

export class CreateofferSkillDto{

    @ApiProperty()
    OfferId: number;

    @ApiProperty()
    SkillId: number;
    
}