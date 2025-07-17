import { CandidateOfferDto } from "src/Dtos/CandidateOffer.dto";
import { ICandidateOfferService } from "./CandidateOffer.service.interfaces";
import { Candiateoffer } from "src/Entities/CandidateOffer.entity";
import { ConflictException } from "@nestjs/common";

export class CandidateOfferService implements ICandidateOfferService{
    private candidateOffer: Candiateoffer[]=[];
    async AddCandidateOffer(candidateOfferDto: CandidateOfferDto): Promise<CandidateOfferDto> {
    const exists = this.candidateOffer.find(
    x => x.offer.OfferId=== candidateOfferDto.CandidateId && x.CandidateId === candidateOfferDto.CandidateId
    );

    if (exists) {
    throw new ConflictException('The candidate already applied to this offer.');
    }

    const newCandidateOffer: Candiateoffer = {
        id: this.candidateOffer.length + 1,
        ...candidateOfferDto,
        
    };

    this.candidateOffer.push(newCandidateOffer);
    return newCandidateOffer;
    }
    DeleteCandidateoffer(CandidateOfferDto: CandidateOfferDto): Promise<CandidateOfferDto> {
        throw new Error("Method not implemented.");
    }
    GetAllCandidateOffer(): Promise<CandidateOfferDto> {
        throw new Error("Method not implemented.");
    }
    GetCandidateOfferbyId(id: number): Promise<CandidateOfferDto> {
        throw new Error("Method not implemented.");
    }
    
}