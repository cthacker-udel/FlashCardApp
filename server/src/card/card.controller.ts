import { CardService } from './card.service';
import { Controller, Get, ImATeapotException, Param, ParseIntPipe } from "@nestjs/common";
import { CardEntity } from './entities/card.entity';



@Controller('card')
export class CardController {

    constructor( private readonly noteService: CardService){}

    @Get('all')
    async getAllCards() {
        return this.noteService.getAllCardsService();
    }

    @Get(':id')
    async getSpecificCard(@Param('id', ParseIntPipe) id: number): Promise<CardEntity> {
        return this.noteService.getAllCardsService().then((result) => {
            return this.noteService.getSpecificCard(result[id].question);
        });
    };


}