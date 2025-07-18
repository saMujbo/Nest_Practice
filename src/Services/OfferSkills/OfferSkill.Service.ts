import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { OfferSkill } from 'src/Entities/OfferSkills.entity';
import { IOfferSkillService } from './OfferSkill.service.interfaces';
import { CreateofferSkillDto } from 'src/Dtos/OfferSkill.dto';


@Injectable()
export class OfferSkillService implements IOfferSkillService {
    private offerSkills: OfferSkill[] = [];

    async AddOfferSkill(dto: CreateofferSkillDto): Promise<OfferSkill> {
    const exists = this.offerSkills.find(
        os => os.OfferId === dto.OfferId && os.SkillId === dto.SkillId,
    );
    if (exists) {
        throw new ConflictException(
        `OfferSkill with OfferId ${dto.OfferId} and SkillId ${dto.SkillId} already exists`,
        );
    }

    const newOfferSkill: OfferSkill = {
        OfferId: dto.OfferId,
        SkillId: dto.SkillId,
        Id: 0,
    };

    this.offerSkills.push(newOfferSkill);
    return newOfferSkill;
    }

    async GetAllOfferSkills(): Promise<OfferSkill[]> {
    return this.offerSkills;
    }

    async GetOfferSkillById(offerId: number, skillId: number): Promise<OfferSkill> {
    const found = this.offerSkills.find(
        os => os.OfferId === offerId && os.SkillId === skillId,
    );
    if (!found) {
        throw new NotFoundException(`OfferSkill with OfferId ${offerId} and SkillId ${skillId} not found`);
    }
    return found;
    }

    async UpdateOfferSkill(offerId: number, skillId: number, dto:CreateofferSkillDto): Promise<OfferSkill> {
    const index = this.offerSkills.findIndex(
        os => os.OfferId === offerId && os.SkillId === skillId,
    );
    if (index === -1) {
        throw new NotFoundException(`OfferSkill with OfferId ${offerId} and SkillId ${skillId} not found`);
    }

    const updated: OfferSkill = {
        OfferId: dto.OfferId,
        SkillId: dto.SkillId,
        Id: 0
    };

    this.offerSkills[index] = updated;
    return updated;
    }

    async DeleteOfferSkill(offerId: number, skillId: number): Promise<void> {
    const index = this.offerSkills.findIndex( os => os.OfferId === offerId && os.SkillId === skillId,
    );
    if (index === -1) {
    throw new NotFoundException(`OfferSkill with OfferId ${offerId} and SkillId ${skillId} not found`);
    }

    this.offerSkills.splice(index, 1);
    }
}
