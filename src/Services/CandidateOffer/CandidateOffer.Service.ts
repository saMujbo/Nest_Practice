import { CandidateOfferDto } from "src/Dtos/CandidateOffer.dto";
import { ICandidateOfferService } from "./CandidateOffer.service.interfaces";
import { Candiateoffer } from "src/Entities/CandidateOffer.entity";
import { ConflictException } from "@nestjs/common";
import { Candidate } from "src/Entities/Cantidate.entity";
import { Offer } from "src/Entities/Offer.entity";
import { IsNull } from "typeorm";

export class CandidateOfferService implements ICandidateOfferService{
    private candidateOffer: Candiateoffer[]=[];
    private candidates: Candidate[] = [];  // Simulando DB de candidatos
    private offers: Offer[] = [];   
    async AddCandidateOffer(candidateOfferDto: CandidateOfferDto): Promise<Candiateoffer> {
    
    // Validar si ya existe la postulación
    const exists = this.candidateOffer.find(
    co => co.CandidateId === offer?.OfferId && co.offer?.id === offer.OfferId,
    );
    if (exists) {
    throw new ConflictException('Candidate already applied to this offer');
    }

    // Buscar entidades relacionadas
    const candidate = this.candidates.find(c => c.CandidateId === offer.CandidateId);
    const offer = this.offers.find(o => o.id === offer?.OfferId);

    if (!candidate || !offer) {
    throw new ConflictException('Candidate or Offer not found');
    }

    // Crear nueva relación
    const newCandidateOffer: Candiateoffer = {
        id: this.candidateOffer.length + 1,
        candidate,
        offer,
        CandidateId: candidate.CandidateId,
        OfferId: offer.OfferId,
    };

    this.candidateOffer.push(newCandidateOffer);
    return newCandidateOffer;
}
    
    async DeleteCandidateoffer(id:number): Promise<void> {
        const result = await this.candidateOffer.findIndex(co=>co.id===id);
            if(result===-1){
                throw new ConflictException('Not found');
            }
            this.candidateOffer.splice(result,1);
        
    }
    async GetAllCandidateOffer(): Promise<Candiateoffer[]> {
        return await this.candidateOffer;
    }
    async GetCandidateOfferbyId(id: number): Promise<Candiateoffer> {
        const candidateOffer = await this.candidateOffer.find(co=>co.CandidateId===id);
        if(!candidateOffer){
            throw new ConflictException('Not found');
        }
        return candidateOffer;
    }
    
}