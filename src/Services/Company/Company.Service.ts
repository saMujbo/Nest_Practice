import { Company } from "src/Entities/Company.entity";
import { ICompanyService } from "./Company.service.Interfaces";
import { ConflictException, Injectable } from "@nestjs/common";
import { CretaeCompanyDto } from "src/Dtos/Company.dto";

@Injectable()
export class CompanyService implements ICompanyService{
    private company: Company[]=[];
    async Addcompany(companyDto: CretaeCompanyDto): Promise<Company> {
        const exist = await this.company.find(co => co.Email === companyDto.Email);
        if(exist){
            throw new ConflictException(`Company with email ${companyDto.Email} already exists`);
        }
        const newCompany: Company = {
            CompanyId: this.company.length + 1,
            ...companyDto,
            candidateoffer: [],
            candidateSkill: [],
        };
        this.company.push(newCompany);
        return newCompany;
    }
    async DeleteCompanyById(id: number): Promise<void> {
        const result = await this.company.findIndex(co=>co.CompanyId===id);
        if(result===-1){
            throw new ConflictException(`Company with id ${id} not found`);
        }
        this.company.splice(result,1);
    }
    async GetAllCompanies(): Promise<Company[]> {
        return await this.company; 
    }
    async GetCompanyById(id: number): Promise<Company> {
        const company = await this.company.find(co=>co.CompanyId === id);
        if(!company){
            throw new ConflictException(`Company with id ${id} not found`);
        }
        return company;
    }
    async UpdateCompany(id: number, companyDto: CretaeCompanyDto): Promise<Company> {
        const companyIndex = await this.company.findIndex(co=>co.CompanyId===id);

        if(companyIndex === -1){
            throw new ConflictException(`Company with id ${id} not found`);
        }
        const updateCompany: Company={
            ...this.company[companyIndex],
            Name: companyDto.Name,
            WebSite: companyDto.WebSite,
            Email: companyDto.Email,
        };
        this.company[companyIndex]= updateCompany;
        return updateCompany;
    }
    
}