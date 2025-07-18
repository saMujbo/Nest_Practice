import {Body,Controller,Delete,Get,Param,ParseIntPipe,Post, Put,} from '@nestjs/common';
import { OfferSkill } from 'src/Entities/OfferSkills.entity';
import { OfferSkillService } from 'src/Services/OfferSkills/OfferSkill.Service';

@Controller('offerskills')
export class OfferSkillController {constructor(private readonly offerSkillService: OfferSkillService) {}

    @Get()
    getAllOfferSkills(): Promise<OfferSkill[]> {
    return this.offerSkillService.getAllOfferSkills();
    }

    @Get(':id')
    getOfferSkillById(@Param('id', ParseIntPipe) id: number): Promise<OfferSkill> {
    return this.offerSkillService.getOfferSkillById(id);
    }

    @Post()
    addOfferSkill(@Body() offerSkill: OfferSkill): Promise<OfferSkill> {
    return this.offerSkillService.addOfferSkill(offerSkill);
    }

    @Put(':id')
    updateOfferSkill(
    @Param('id', ParseIntPipe) id: number,
    @Body() offerSkill: OfferSkill,
    ): Promise<OfferSkill> {
    return this.offerSkillService.updateOfferSkill(id, offerSkill);
    }

    @Delete(':id')
    deleteOfferSkill(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.offerSkillService.deleteOfferSkill(id);
    }
}
