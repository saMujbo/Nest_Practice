import { Injectable, NotFoundException } from "@nestjs/common";
import { Candidate } from "src/Entities/Cantidate.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Offer } from "src/Entities/Offer.entity";
import { Skills } from "src/Entities/Skills.entitty";
import { ICandidateService } from "./Candidate.Service.Interface";


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
    async addCandidate(candidate: Candidate): Promise<Candidate> {
        const exist = await this.candidates.find(c=>c.Email===candidate.Email);
        if(exist){
            throw new NotFoundException(`Candidate with email ${candidate.Email} already exists`);
        }
        candidate.CandidateId= this.candidates.length+1;
        this.candidates.push(candidate);
        return candidate; 
    }
    async deleteCandidate(id: number): Promise<void> {
        const resutl = await this.candidates.findIndex(c=>c.CandidateId===id);
        if (resutl === -1) {
            throw new NotFoundException(`Candidate with id ${id} not found`);
        }
        this.candidates.splice(resutl, 1);
    }
}

