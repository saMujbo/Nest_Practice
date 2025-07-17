import { CreateOfferDto } from "src/Dtos/Offer.dto";
import { Offer } from "src/Entities/Offer.entity";

export interface IOfferService{
    GetAllOffers():Promise<Offer[]>
    GetOffersByCandidate(id:number):Promise<Offer[]>
    GetOfferById(id:number):Promise<Offer>
    AddOffer(Offerdto:CreateOfferDto):Promise<Offer>
    UptadeOffer(id:number,Offer:CreateOfferDto):Promise<Offer>
}