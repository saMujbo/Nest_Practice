import { Interface } from "readline"
import { CandidateOfferDto } from "src/Dtos/CandidateOffer.dto"
import { Candiateoffer } from "src/Entities/CandidateOffer.entity";


export interface ICandidateOfferService{
    AddCandidateOffer(CandidateOfferDto:CandidateOfferDto):Promise<Candiateoffer>;
    DeleteCandidateoffer(id:number):Promise<void>;
    GetAllCandidateOffer():Promise<Candiateoffer[]>;
    GetCandidateOfferbyId(id:number):Promise<Candiateoffer>;
}