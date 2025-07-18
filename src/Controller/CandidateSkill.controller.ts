import {Controller,Get,Param,Post,Delete,Body,ParseIntPipe,Put,} from '@nestjs/common';
import { CandidateSkill } from 'src/Entities/CandidateSkill.entity';
import { CandidateSkillService } from 'src/Services/CandidateSkill/CandidateSkill.Service';


@Controller('candidate-skills')
export class CandidateSkillController {
    constructor(private readonly candidateSkillService: CandidateSkillService,) {}

    @Get()
    getAllCandidateSkills(): Promise<CandidateSkill[]> {
    return this.candidateSkillService.GetAllCandidateSkills();
    }

    @Get(':id')
    getCandidateSkillById(
    @Param('id', ParseIntPipe) id: number,
    ): Promise<CandidateSkill> {
    return this.candidateSkillService.GetCandidateSkillById(id);
    }

    @Post()
    addCandidateSkill(
    @Body() candidateSkill: CandidateSkill,
    ): Promise<CandidateSkill> {
    return this.candidateSkillService.AddCandidateSkill(candidateSkill);
    }

    @Delete()
    deleteCandidateSkill(
    @Body() id:number,
    ): Promise<void> {
    return this.candidateSkillService.DeleteCandidateSkill(id);
    }

    @Put(':id')
    updateCandidateSkill(
    @Param('id', ParseIntPipe) id: number,
    @Body() candidateSkill: CandidateSkill,
    ): Promise<CandidateSkill> {
    return this.candidateSkillService.UpdateCandidateSkill(id, candidateSkill);
    }
}
