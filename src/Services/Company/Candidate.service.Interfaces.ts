import { Company } from "src/Entities/Company.entity";

export interface ICompanyService{
    Addcompany(company:Company): Promise<Company[]>
    DeleteCompanyById(id:number): Promise<void>
    GetAllCompanies():Promise<Company[]>
    GetCompanyById(id:number): Promise<Company[]>
    UpdateCompany(id:number,company:Company): Promise<Company[]>
}