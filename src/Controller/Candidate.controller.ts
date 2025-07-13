import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { CreateCandidateDto } from "src/Dtos/Candidates.dto";
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

@Get(':id')
    getCandidateById(@Param('id', ParseIntPipe)id:number):Promise<Candidate>{
    return this.candidateService.getCandidateById(id);
    
} 
@Get('/:id/offers')
getOffers(@Param('id',ParseIntPipe)id:number):Promise<Offer[]>{
    return this.candidateService.getOffersByCandidate(id);
}

@Get('/:id/skills')
getSkills(@Param('id',ParseIntPipe)id:number): Promise<Skills[]>{
    return this.candidateService.getSkillsByCandidate(id);
}

@Post()
addCandidate(@Body()candidate:CreateCandidateDto):Promise<Candidate>{
    return this.candidateService.addCandidate(candidate);
}

@Delete('/:id')
DeleteCandidate(@Param('id',ParseIntPipe)id:number):Promise<void>{
    return this.candidateService.deleteCandidate(id);
}

}