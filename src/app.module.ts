import { Module } from '@nestjs/common';
import { CandidateController } from './Controller/Candidate.controller';
import { CandidateService } from './Services/Candidates/Candidate.Service';
import { CompanyController } from './Controller/Company.controller';
import { CompanyService } from './Services/Company/Company.Service';
import { SkillsController } from './Controller/Skill.controller';
import { OfferController } from './Controller/Offer.controller';
import { SkillsService } from './Services/Skills/Skills.service';
import { OfferSerice } from './Services/Offers/Offer.Service';

// agrega aquí otros módulos que vayas creando

@Module({
  controllers: [CandidateController,
                CompanyController,
                SkillsController,
                OfferController],
  providers: [CandidateService,
              SkillsService,
              OfferSerice,
              CompanyService],
})
export class AppModule {}
