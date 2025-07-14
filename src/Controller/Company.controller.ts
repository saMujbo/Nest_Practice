import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CreateCandidateDto } from "src/Dtos/Candidates.dto";
import { Company } from "src/Entities/Company.entity";
import { CompanyService } from "src/Services/Company/Company.Service";

@Controller('Çompany')
export class CompanyController{
    constructor(private readonly companyService:CompanyService){}

    @Get()
    getAllCompanies():Promise<Company[]>{
        return this.companyService.GetAllCompanies();
    }
    

    @Get(':id')
    getCompanyByid(@Param('id',ParseIntPipe)id:number):Promise<Company>{
        return this.companyService.GetCompanyById(id);
    }

    @Post()
    addCompany(@Body()company:CreateCandidateDto): Promise<Company>{
        return this.companyService.Addcompany(company);
    }

    @Delete('/:id')
    DeleteCompany(@Param('id',ParseIntPipe)id:number):Promise<void>{
            return this.companyService.DeleteCompanyById(id);
    }

    @Put('/:id')
    UpdateCompany(
    @Param('id',ParseIntPipe)id:number,
    @Body()companyDto:CreateCandidateDto
    ): Promise<Company>{
        return this.companyService.UpdateCompany(id,companyDto);
    }
}


