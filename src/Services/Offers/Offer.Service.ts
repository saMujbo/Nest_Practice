import { CreateOfferDto } from "src/Dtos/Offer.dto";
import { Offer } from "src/Entities/Offer.entity";
import { IOfferService } from "./Offers.service.interfaces";
import { Candidate } from "src/Entities/Cantidate.entity";
import { ConflictException } from "@nestjs/common";
import { Skills } from "src/Entities/Skills.entitty";

export class OfferSerice implements IOfferService{

    private offer : Offer[] = [];
    private candidate : Candidate[]=[];

    async GetAllOffers(): Promise<Offer[]> {
        return await this.offer;
    }
    async GetOffersByCandidate(id: number): Promise<Offer[]> {
    const candiate =  this.candidate.find(ca=>ca.CandidateId===id);
    if(!candiate){
        throw new ConflictException(`Candidate with id ${id} not found`);
    }
    const candiateSkillsIds= candiate.candidateSkill?.map(cs=>cs.CanidateId); 

    const offers = this.offer.filter(o=>o.offerSkill?.some(os=>candiateSkillsIds?.includes(os.SkillId))
    );
        return Promise.resolve(offers);
    }
    async GetOfferById(id: number): Promise<Offer> {
        const result = await this.offer.find(o=>o.OfferId===id);
        if(!result){
            throw new ConflictException(`Offer with ${id} is not found`);
        }
        return result;
    }

    AddOffer(Offerdto: CreateOfferDto): Promise<Offer> {
    const newoffer: Offer = {
        id: this.offer.length + 1, // o el campo correcto si no es 'id'
        ...Offerdto,
    };

    this.offer.push(newoffer);
    return Promise.resolve(newoffer);
}

    async UptadeOffer(id: number, Offer: CreateOfferDto): Promise<Offer> {
        const offerIndex= await this.offer.findIndex(of=>of.OfferId===id);
        if(offerIndex===-1){
            throw new ConflictException(`offer with id ${id} not found`);
        }
        const updateOffer: Offer= {
            ...this.offer[offerIndex],
            Job:Offer.Job,
            Description:Offer.Description,
        };
        this.offer[offerIndex]=  updateOffer;
        return updateOffer;
    }
    async DeleteOffer(id: number): Promise<void> {
        const result = await this.offer.findIndex(of=>of.OfferId===id);
        if(result===-1){
            throw new ConflictException(`Offer with id ${id} is not found`);
        }
        this.offer.splice(result,1);
    }
}