import { CretaeCompanyDto } from "src/Dtos/Company.dto";
import { Company } from "src/Entities/Company.entity";

export interface ICompanyService{
    Addcompany(company:CretaeCompanyDto): Promise<Company>
    DeleteCompanyById(id:number): Promise<void>
    GetAllCompanies():Promise<Company[]>
    GetCompanyById(id:number): Promise<Company>
    UpdateCompany(id:number,company:CretaeCompanyDto): Promise<Company>
}