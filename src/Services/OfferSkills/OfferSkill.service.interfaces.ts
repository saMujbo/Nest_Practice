import { CreateofferSkillDto } from "src/Dtos/OfferSkill.dto";
import { OfferSkill } from "src/Entities/OfferSkills.entity";

export interface IOfferSkillService {
    GetAllOfferSkills(): Promise<OfferSkill[]>;
    GetOfferSkillById(offerId: number, skillId: number): Promise<OfferSkill>;
    AddOfferSkill(dto: CreateofferSkillDto): Promise<OfferSkill>;
    UpdateOfferSkill(offerId: number, skillId: number, dto:CreateofferSkillDto): Promise<OfferSkill>;
    DeleteOfferSkill(offerId: number, skillId: number): Promise<void>;
}
