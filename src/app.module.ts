import { Module } from '@nestjs/common';
import { CandidateController } from './Controller/Candidate.controller';
import { CandidateService } from './Services/Candidates/Candidate.Service';
import { CompanyController } from './Controller/Company.controller';
import { CompanyService } from './Services/Company/Company.Service';
import { SkillsController } from './Controller/Skill.controller';
import { OfferController } from './Controller/Offer.controller';
import { SkillsService } from './Services/Skills/Skills.service';
import { OfferSerice } from './Services/Offers/Offer.Service';
import { CandidateOfferController } from './Controller/CandidateOffer.controller';
import { CandidateOfferService } from './Services/CandidateOffer/CandidateOffer.Service';
import { CandidateSkillController } from './Controller/CandidateSkill.controller';
import { CandidateSkillService } from './Services/CandidateSkill/CandidateSkill.Service';
import { OfferSkillController } from './Controller/OfferSkill.controller';
import { OfferSkillService } from './Services/OfferSkills/OfferSkill.Service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CandidateSkill } from './Entities/CandidateSkill.entity';
import { OfferSkill } from './Entities/OfferSkills.entity';



@Module({
  controllers: [CandidateController,
                CompanyController,
                SkillsController,
                OfferController,
                CandidateOfferController,
                CandidateSkillController,
                OfferSkillController
              ],
  providers: [CandidateService,
              SkillsService,
              OfferSerice,
              CandidateOfferService,
              CandidateSkillService,
              CompanyService,
              OfferSkillService
            ],
})
export class AppModule {}
