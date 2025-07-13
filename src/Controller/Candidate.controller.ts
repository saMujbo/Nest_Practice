import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { Candidate } from "src/Entities/Cantidate.entity";
import { Offer } from "src/Entities/Offer.entity";
import { Skills } from "src/Entities/Skills.entitty";
import { CandidateService } from "src/Services/Candidates/Candidate.Service";


@Controller('Candidates')
export class CandidateController{
    constructor(private readonly candidateService: CandidateService){}

@Get()
    getAllCandidates(): Promise<Candidate[]>{
    return this.candidateService.getAllCandidates();
}

@Get('/id')
    getCandidateById(@Param('id', ParseIntPipe)id:number):Promise<Candidate>{
    return this.candidateService.getCandidateById(id);
    
} 
@Get('/offers')
getOffers(@Param('id',ParseIntPipe)id:number):Promise<Offer[]>{
    return this.candidateService.getOffersByCandidate(id);
}

@Get('/skills')
getSkills(@Param('id',ParseIntPipe)id:number): Promise<Skills[]>{
    return this.candidateService.getSkillsByCandidate(id);
}

@Post()
addCandidate(@Body()candidate:Candidate):Promise<Candidate>{
    return this.candidateService.addCandidate(candidate);
}

@Delete('/id')
DeleteCandidate(@Param('id',ParseIntPipe)id:number):Promise<void>{
    return this.candidateService.deleteCandidate(id);
}

}