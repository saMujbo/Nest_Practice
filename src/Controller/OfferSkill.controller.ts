import {Body,Controller,Delete,Get,Param,ParseIntPipe,Post, Put,} from '@nestjs/common';
import { CreateofferSkillDto } from 'src/Dtos/OfferSkill.dto';
import { OfferSkill } from 'src/Entities/OfferSkills.entity';
import { OfferSkillService } from 'src/Services/OfferSkills/OfferSkill.Service';

@Controller('offerskills')
export class OfferSkillController {constructor(private readonly offerSkillService: OfferSkillService) {}

    @Get()
    getAllOfferSkills(): Promise<OfferSkill[]> {
    return this.offerSkillService.GetAllOfferSkills();
    }

    @Get(':id')
    getOfferSkillById(@Param('offerid', ParseIntPipe) offerid: number,
    @Param('skillId',ParseIntPipe)skillId:number
): Promise<OfferSkill> {
    return this.offerSkillService.GetOfferSkillById(offerid,skillId);
    }

    @Post()
    addOfferSkill(@Body() offerSkill: CreateofferSkillDto): Promise<OfferSkill> {
    return this.offerSkillService.AddOfferSkill(offerSkill);
    }

    @Put(':id')
    updateOfferSkill(
    @Param('offerId', ParseIntPipe) offerId: number,
    @Param('skillId', ParseIntPipe) skillId: number,
    @Body() offerSkill: CreateofferSkillDto,
    ): Promise<OfferSkill> {
    return this.offerSkillService.UpdateOfferSkill(offerId,skillId, offerSkill);
    }

    @Delete(':id')
    deleteOfferSkill(
    @Param('offerId', ParseIntPipe) offerId: number,
    @Param('skillId', ParseIntPipe) skillId: number,

): Promise<void> {
    return this.offerSkillService.DeleteOfferSkill(offerId,skillId);
    }
}
