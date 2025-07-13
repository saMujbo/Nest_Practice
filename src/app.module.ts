import { Module } from '@nestjs/common';
import { CandidateController } from './Controller/Candidate.controller';
import { CandidateService } from './Services/Candidates/Candidate.Service';

// agrega aquí otros módulos que vayas creando

@Module({
  controllers: [CandidateController],
  providers: [CandidateService],
})
export class AppModule {}
