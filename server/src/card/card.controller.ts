import { CardService } from './card.service';
import { Controller, Get } from "@nestjs/common";



@Controller('card')
export class CardController {

    constructor( private readonly noteService: CardService){}

    @Get('all')
    async getAllCards() {

        

    }


}