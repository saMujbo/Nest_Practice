import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CandidateSkill } from 'src/Entities/CandidateSkill.entity';

@Injectable()
export class CandidateSkillService {
    constructor(
    @InjectRepository(CandidateSkill)
    private readonly candidateSkillRepo: Repository<CandidateSkill>,
    ) {}

    async addCandidateSkill(candidateSkill: CandidateSkill): Promise<CandidateSkill> {
    return await this.candidateSkillRepo.save(candidateSkill);
    }

    async deleteCandidateSkill(candidateSkill: CandidateSkill): Promise<void> {
    const existing = await this.candidateSkillRepo.findOne({
    where: {
        CanidateId: candidateSkill.CanidateId,
        skill: candidateSkill.skill, 
    },
    relations: ['skill'],
    });

    if (!existing) {
    throw new NotFoundException('CandidateSkill not found');
    }

    await this.candidateSkillRepo.remove(existing);
    }

    async getAllCandidateSkills(): Promise<CandidateSkill[]> {
    return await this.candidateSkillRepo.find({ relations: ['candidate', 'skill'] });
    }

    async getCandidateSkillById(id: number): Promise<CandidateSkill> {
    const skill = await this.candidateSkillRepo.findOne({ where: { id }, relations: ['candidate', 'skill'] });
    if (!skill) {
    throw new NotFoundException('CandidateSkill not found');
    }
    return skill;
    }

    async updateCandidateSkill(id: number, candidateSkill: CandidateSkill): Promise<CandidateSkill> {
    const existing = await this.candidateSkillRepo.findOne({ where: { id } });

    if (!existing) {
    throw new NotFoundException('CandidateSkill not found');
    }

    const updated = this.candidateSkillRepo.merge(existing, candidateSkill);
    return await this.candidateSkillRepo.save(updated);
    }
}
