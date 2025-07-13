import { Candidate } from "src/Entities/Cantidate.entity";
import { Offer } from "src/Entities/Offer.entity";
import { Skills } from "src/Entities/Skills.entitty";

export interface ICandidateService{
getAllCandidates(): Promise<Candidate[]  >;
getCandidateById(id:number): Promise<Candidate>;
getOffersByCandidate(id:number): Promise<Offer[]>; 
getSkillsByCandidate(id:number): Promise<Skills[]>;
addCandidate(candidate: Candidate): Promise<Candidate>;
deleteCandidate(id:number): Promise<void>; 

}