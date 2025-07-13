import { Injectable, NotFoundException } from "@nestjs/common";
import { Candidate } from "src/Entities/Cantidate.entity";
import { Offer } from "src/Entities/Offer.entity";
import { Skills } from "src/Entities/Skills.entitty";
import { ICandidateService } from "./Candidate.Service.Interface";
import { CreateCandidateDto } from "src/Dtos/Candidates.dto";


@Injectable()
export class CandidateService implements ICandidateService{

    private candidates: Candidate[] = []; // almacenamiento simulado

    async getAllCandidates(): Promise<Candidate[]> {
        return await this.candidates;
    }
    async getCandidateById(id: number): Promise<Candidate> {
        const candidate = await this.candidates.find(c=>c.CandidateId===id);
        if(!candidate){
            throw new NotFoundException(`Candidate with id ${id} not found`);
        }
        return candidate;
    }
    async getOffersByCandidate(id: number): Promise <Offer[]> {
        const candidate = await this.getCandidateById(id);
        return candidate?.candidateOffers?.map(co => co.offer)||[];
    }
    async getSkillsByCandidate(id: number): Promise<Skills[]> {
        const candidate = await this.getCandidateById(id);
        return candidate?.candidateSkill?.map(cs=>cs.skill)||[];
    }
    async addCandidate(candidateDto: CreateCandidateDto): Promise<Candidate> {
    const exist = this.candidates.find(c => c.Email === candidateDto.Email);
    if (exist) {
    throw new NotFoundException(`Candidate with email ${candidateDto.Email} already exists`);
    }

    const newCandidate: Candidate = {
    CandidateId: this.candidates.length + 1,
    ...candidateDto,
    candidateOffers: [],
    candidateSkill: [],
    };

    this.candidates.push(newCandidate);
    return newCandidate;
}

    async deleteCandidate(id: number): Promise<void> {
        const resutl = await this.candidates.findIndex(c=>c.CandidateId===id);
        if (resutl === -1) {
            throw new NotFoundException(`Candidate with id ${id} not found`);
        }
        this.candidates.splice(resutl, 1);
    }
}

