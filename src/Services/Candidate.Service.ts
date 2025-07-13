import { Injectable, NotFoundException } from "@nestjs/common";
import { ICandidateService } from "./Candidates/Candidate.Service.Interface";
import { Candidate } from "src/Entities/Cantidate.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Offer } from "src/Entities/Offer.entity";
import { Skills } from "src/Entities/Skills.entitty";


@Injectable()
export class CandidateService implements ICandidateService{
    constructor(
        @InjectRepository(Candidate)
        private readonly candidateRepo: Repository<Candidate>,
    ){}

    async getAllCandidates(): Promise<Candidate[]> {
        return await this.candidateRepo.find();
    }
    async getCandidateById(id: number): Promise<Candidate | null> {
        const candidate = await this.candidateRepo.findOne({
            where:{CandidateId:id},
            relations:['candidateSkill','candidateSkill.skill'],
        });
        return candidate || null; 
    }
    async getOffersByCandidate(id: number): Promise <Offer[]> {
        const candidate = await this.candidateRepo.findOne({
            where:{CandidateId:id},
            relations:['candidateOffers','candidateOffers.offer'],
        });
        return candidate?.candidateOffers?.map(co => co.offer)||[];
    }
    async getSkillsByCandidate(id: number): Promise<Skills[]> {
        const candidate = await this.candidateRepo.findOne({
            where:{CandidateId:id},
            relations: ['candidateSkill','candidateSkill.skill'],
        });
        return candidate?.candidateSkill?.map(cs=>cs.skill)||[];
    }
    async addCandidate(candidate: Candidate): Promise<Candidate | null> {
        const existing = await this.candidateRepo.findOne({where:{ Email: candidate.Email}});
        if(existing) return null;

        return await this.candidateRepo.save(candidate);
    }
    async deleteCandidate(id: number): Promise<void> {
        const resutl = await this.candidateRepo.delete(id);
        if(resutl.affected === 0){
        throw new NotFoundException('Candidate not found');
        }
    }
    
}