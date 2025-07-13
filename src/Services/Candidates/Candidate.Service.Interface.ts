import { Candidate } from "src/Entities/Cantidate.entity";
import { Offer } from "src/Entities/Offer.entity";
import { Skills } from "src/Entities/Skills.entitty";

export interface ICandidateService{
getAllCandidates(): Promise<Candidate[]  >;
getCandidateById(id:number): Promise<Candidate | null>;
getOffersByCandidate(id:number): Promise<Offer[]>; 
getSkillsByCandidate(id:number): Promise<Skills[]>;
addCandidate(candidate: Candidate): Promise<Candidate | null>;
deleteCandidate(id:number): Promise<void>; 

}