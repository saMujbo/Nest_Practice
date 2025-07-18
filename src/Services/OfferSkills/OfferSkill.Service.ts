import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IOfferSkillService } from './OfferSkill.service.interfaces';
import { OfferSkill } from 'src/Entities/OfferSkills.entity';


@Injectable()
export class OfferSkillService implements IOfferSkillService {
    constructor(
    @InjectRepository(OfferSkill)
    private readonly offerSkillRepo: Repository<OfferSkill>,
    ) {}

    async getAllOfferSkills(): Promise<OfferSkill[]> {
    return await this.offerSkillRepo.find({ relations: ['offer', 'skill'] });
    }

    async getOfferSkillById(id: number): Promise<OfferSkill> {
    const offerSkill = await this.offerSkillRepo.findOne({
    where: {
    OfferId: id,    
    SkillId: id,    
    },
    relations: ['offer', 'skill'],
});

    if (!offerSkill) {
    throw new NotFoundException('OfferSkill not found');
    }
    return offerSkill;
}

    async addOfferSkill(offerSkill: OfferSkill): Promise<OfferSkill> {
    return await this.offerSkillRepo.save(offerSkill);
}

    async updateOfferSkill(id: number, offerSkill: OfferSkill): Promise<OfferSkill> {
    const existing = await this.offerSkillRepo.findOneBy({ OfferId: id });

    if (!existing) {
    throw new NotFoundException('OfferSkill not found');
    }
    Object.assign(existing, offerSkill);
    return await this.offerSkillRepo.save(existing);
    }

    async deleteOfferSkill(id: number): Promise<void> {
    const existing = await this.offerSkillRepo.findOneBy({ OfferId: id });

    if (!existing) {
    throw new NotFoundException('OfferSkill not found');
    }
    await this.offerSkillRepo.remove(existing);
    }
}
