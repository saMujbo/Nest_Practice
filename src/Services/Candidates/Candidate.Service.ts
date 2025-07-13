import { Injectable, NotFoundException } from "@nestjs/common";
import { Candidate } from "src/Entities/Cantidate.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Offer } from "src/Entities/Offer.entity";
import { Skills } from "src/Entities/Skills.entitty";
import { ICandidateService } from "./Candidate.Service.Interface";


@Injectable()
export class CandidateService implements ICandidateService{
    constructor(
        @InjectRepository(Candidate)
        private readonly candidateRepo: Repository<Candidate>,
    ){}

    async getAllCandidates(): Promise<Candidate[]> {
        return await this.candidateRepo.find();
    }
    async getCandidateById(id: number): Promise<Candidate> {
        const candidate = await this.candidateRepo.findOne({
            where:{CandidateId:id},
            relations:['candidateSkill','candidateSkill.skill'],
        });
        if(!candidate){
                throw new NotFoundException(`Candidate with id ${id} not found`);
        }
        return candidate; 
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
    async addCandidate(candidate: Candidate): Promise<Candidate> {
        const existing = await this.candidateRepo.findOne({where:{ Email: candidate.Email}});
        return await this.candidateRepo.save(candidate);
    }
    async deleteCandidate(id: number): Promise<void> {
        const resutl = await this.candidateRepo.delete(id);
        if(resutl.affected === 0){
        throw new NotFoundException('Candidate not found');
        }
    }
    
}