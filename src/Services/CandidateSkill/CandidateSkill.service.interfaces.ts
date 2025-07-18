import { CreateCandidateSkillDto } from "src/Dtos/CandidateSkill.dto";
import { CandidateSkill } from "src/Entities/CandidateSkill.entity";

export interface ICandidateSkillService {
    AddCandidateSkill(candidateSkill: CreateCandidateSkillDto): Promise<CandidateSkill>;
    DeleteCandidateSkill(id:number): Promise<void>;
    GetAllCandidateSkills(): Promise<CandidateSkill[]>;
    GetCandidateSkillById(id: number): Promise<CandidateSkill>;
    UpdateCandidateSkill(id: number, candidateSkill: CreateCandidateSkillDto): Promise<CandidateSkill>;
}