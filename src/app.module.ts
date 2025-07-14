import { Module } from '@nestjs/common';
import { CandidateController } from './Controller/Candidate.controller';
import { CandidateService } from './Services/Candidates/Candidate.Service';
import { CompanyController } from './Controller/Company.controller';
import { CompanyService } from './Services/Company/Company.Service';

// agrega aquí otros módulos que vayas creando

@Module({
  controllers: [CandidateController,CompanyController],
  providers: [CandidateService,CompanyService],
})
export class AppModule {}
