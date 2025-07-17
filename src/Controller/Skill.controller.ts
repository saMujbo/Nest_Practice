import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { CreateSkillsDto } from "src/Dtos/Skills.dto";
import { Skills } from "src/Entities/Skills.entitty";
import { SkillsService } from "src/Services/Skills/Skills.service";

@Controller('Skills')
export class SkillsController{
constructor( private readonly skillsService:SkillsService){}

@Get()
getAllskill():Promise<Skills[]>{
    return this.skillsService.GetSkills();
}
@Post()
addSkill(@Body()skill:CreateSkillsDto):Promise<Skills>{
    return this.skillsService.AddSkills(skill);
}
@Get('/:id')
getSkillById(@Param('id',ParseIntPipe)id:number):Promise<Skills>{
    return this.skillsService.GetSkillById(id);
}
@Delete('/:id')
DeleteSkill(@Param('id',ParseIntPipe)id:number):Promise<void>{
    return this.skillsService.DeleteSkill(id);
}
}