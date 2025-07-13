import { Company } from "src/Entities/Company.entity";

export interface ICompanyService{
    Addcompany(company:Company): Promise<Company | null>
}