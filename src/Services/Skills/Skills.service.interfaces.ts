import { CreateSkillsDto } from "src/Dtos/Skills.dto";
import { Skills } from "src/Entities/Skills.entitty";


export interface ISkillsService{
    AddSkills(skill:CreateSkillsDto): Promise<Skills>
    GetSkills():Promise<Skills[]>
    GetSkillById(id:number):Promise<Skills>
    DeleteSkill(id:number):Promise<void>
}