import { OfferSkill } from "src/Entities/OfferSkills.entity";

export interface IOfferSkillService {
    getAllOfferSkills(): Promise<OfferSkill[]>;
    getOfferSkillById(id: number): Promise<OfferSkill>;
    addOfferSkill(offerSkill: OfferSkill): Promise<OfferSkill>;
    updateOfferSkill(id: number, offerSkill: OfferSkill): Promise<OfferSkill>;
    deleteOfferSkill(id: number): Promise<void>;
}
