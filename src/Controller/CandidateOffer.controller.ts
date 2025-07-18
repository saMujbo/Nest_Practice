import {Body,Controller,Delete,Get,Param,ParseIntPipe,Post,} from '@nestjs/common';
import { CandidateOfferDto } from 'src/Dtos/CandidateOffer.dto';
import { Candiateoffer } from 'src/Entities/CandidateOffer.entity';
import { CandidateOfferService } from 'src/Services/CandidateOffer/CandidateOffer.Service';

@Controller('candidate-offers')
export class CandidateOfferController {
    constructor( private readonly candidateOfferService: CandidateOfferService,) {}

    @Get()
    getAllCandidateOffers(): Promise<Candiateoffer[]> {
    return this.candidateOfferService.GetAllCandidateOffer();
    }

    @Get(':id')
    getCandidateOfferById(@Param('id', ParseIntPipe) id: number ): Promise<Candiateoffer> {
    return this.candidateOfferService.GetCandidateOfferbyId(id);
    }

    @Post()
    addCandidateOffer(@Body() candidateOfferDto: CandidateOfferDto,): Promise<Candiateoffer> {
    return this.candidateOfferService.AddCandidateOffer(candidateOfferDto);
    }

    @Delete(':id')
    deleteCandidateOffer(
    @Param('id', ParseIntPipe) id: number,): Promise<void> {
    return this.candidateOfferService.DeleteCandidateoffer(id);
    }
}
