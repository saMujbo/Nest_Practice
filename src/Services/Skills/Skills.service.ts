import { Skills } from "src/Entities/Skills.entitty";
import { ISkillsService } from "./Skills.service.interfaces";
import { CreateSkillsDto } from "src/Dtos/Skills.dto";
import { ConflictException } from "@nestjs/common";


export class SkillsService implements ISkillsService{
    private skill: Skills[]=[];
    
    async AddSkills(skilldto: CreateSkillsDto): Promise<Skills> {
        const exist = await this.skill.find(s =>s.Name === skilldto.Name);
        if(exist){
            throw new ConflictException(`Skill with name ${skilldto.Name} already exists`);
        }
        const newSkill: Skills={
            SkillId: this.skill.length +1,
            ...skilldto,
        };
        this.skill.push(newSkill);
        return newSkill;
    }
    async GetSkills(): Promise<Skills[]> {
        return await this.skill;
    }
    async GetSkillById(id: number): Promise<Skills> {
        const skill = await this.skill.find(s=>s.SkillId===id);
        if(!skill){
            throw new ConflictException(`Skill with id ${id} not found`);
        }
        return skill;
    }
    async DeleteSkill(id: number): Promise<void> {
        const result = await this.skill.findIndex(s=>s.SkillId===id);
        if(result=== -1){
            throw new ConflictException(`Skill id ${id} not found`);
        }
        this.skill.splice(result,1);
    }
}