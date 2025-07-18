import { CandidateSkill } from "src/Entities/CandidateSkill.entity";

export interface ICandidateSkillService {
    addCandidateSkill(candidateSkill: CandidateSkill): Promise<CandidateSkill>;
    deleteCandidateSkill(candidateSkill: CandidateSkill): Promise<void>;
    getAllCandidateSkills(): Promise<CandidateSkill[]>;
    getCandidateSkillById(id: number): Promise<CandidateSkill>;
    updateCandidateSkill(id: number, candidateSkill: CandidateSkill): Promise<CandidateSkill>;
}