import { Interface } from "readline"
import { CandidateOfferDto } from "src/Dtos/CandidateOffer.dto"


export interface ICandidateOfferService{
    AddCandidateOffer(CandidateOfferDto:CandidateOfferDto):Promise<CandidateOfferDto>;
    DeleteCandidateoffer(CandidateOfferDto:CandidateOfferDto):Promise<CandidateOfferDto>;
    GetAllCandidateOffer():Promise<CandidateOfferDto>;
    GetCandidateOfferbyId(id:number):Promise<CandidateOfferDto>;
}