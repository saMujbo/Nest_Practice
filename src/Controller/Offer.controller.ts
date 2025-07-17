import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CreateOfferDto } from "src/Dtos/Offer.dto";
import { Offer } from "src/Entities/Offer.entity";
import { OfferSerice } from "src/Services/Offers/Offer.Service";

@Controller('Offer')
export class OfferController{
    constructor(private readonly offferService:OfferSerice){}

    @Get()
    getAllOffer():Promise<Offer[]>{
        return this.offferService.GetAllOffers();
    }

    @Get('/:id')
    getoffrById(@Param('id',ParseIntPipe)id:number):Promise<Offer>{
        return this.offferService.GetOfferById(id);
    }


    @Get('/:id/offers')
    getOfferByCandidate(@Param('id',ParseIntPipe)id:number):Promise<Offer[]>{
        return this.offferService.GetOffersByCandidate(id);
    }

    @Post()
    addOffer(@Body()offer:CreateOfferDto):Promise<Offer>{
        return this.offferService.AddOffer(offer);
    }

    @Delete('/:id')
    DeleteOffer(@Param('id',ParseIntPipe)id:number):Promise<void>{
        return this.offferService.DeleteOffer(id);
    }

    @Put('/:id')
    UpdateOffer(
        @Param('id',ParseIntPipe)id:number,
        @Body()offerDto:CreateOfferDto)
        :Promise<Offer>{
            return this.offferService.UptadeOffer(id,offerDto);
        }
}