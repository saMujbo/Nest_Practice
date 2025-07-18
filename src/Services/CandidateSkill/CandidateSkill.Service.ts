import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCandidateSkillDto } from 'src/Dtos/CandidateSkill.dto';
import { CandidateSkill } from 'src/Entities/CandidateSkill.entity';
import { ICandidateSkillService } from './CandidateSkill.service.interfaces';
import { Skills } from 'src/Entities/Skills.entitty';
import { Candidate } from 'src/Entities/Cantidate.entity';

@Injectable()
export class CandidateSkillService implements ICandidateSkillService {
    private candidateSkills: CandidateSkill[] = [];

    async AddCandidateSkill(dto: CreateCandidateSkillDto): Promise<CandidateSkill> {
    const exists = this.candidateSkills.find(
    cs => cs.CandidateId === dto.CandidateId && cs.SkillId === dto.SkillId,
    );

    if (exists) {
    throw new ConflictException('CandidateSkill already exists');
    }

    const newCandidateSkill: CandidateSkill = {
        id: this.candidateSkills.length + 1,
        CandidateId: dto.CandidateId,
        SkillId: dto.SkillId,
        candidate: new Candidate,
        skill: new Skills
    };

    this.candidateSkills.push(newCandidateSkill);
    return newCandidateSkill;
    }

    async DeleteCandidateSkill(id: number): Promise<void> {
    const index = this.candidateSkills.findIndex(cs => cs.id === id);

    if (index === -1) {
    throw new NotFoundException(`CandidateSkill with id ${id} not found`);
    }

    this.candidateSkills.splice(index, 1);
    }

    async GetAllCandidateSkills(): Promise<CandidateSkill[]> {
    return this.candidateSkills;
    }

    async GetCandidateSkillById(id: number): Promise<CandidateSkill> {
    const skill = this.candidateSkills.find(cs => cs.id === id);

    if (!skill) {
    throw new NotFoundException(`CandidateSkill with id ${id} not found`);
    }

    return skill;
    }

    async UpdateCandidateSkill(id: number, dto: CreateCandidateSkillDto): Promise<CandidateSkill> {
    const index = this.candidateSkills.findIndex(cs => cs.id === id);

    if (index === -1) {
    throw new NotFoundException(`CandidateSkill with id ${id} not found`);
    }

    const updated: CandidateSkill = {
    ...this.candidateSkills[index],
    ...dto,
    };

    this.candidateSkills[index] = updated;
    return updated;
    }
}
