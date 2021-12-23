import { CardExistsPipe } from './card.cardExists.pipe';
import { ClassTranformerValidatorPipe } from './card.validation.pipe';
import { CardSchema } from './schema/card.schema';
import { CardService } from './card.service';
import { Body, Controller, DefaultValuePipe, Get, ImATeapotException, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CardEntity } from './entities/card.entity';
import { CardDto } from './dto/card.dto';



@Controller('card')
export class CardController {

    constructor( private readonly cardService: CardService){}

    @Get('all')
    async getAllCards() {
        return this.cardService.getAllCardsService();
    }

    @Get(':id')
    getSpecificCard(@Param('id', new DefaultValuePipe('none'), new CardExistsPipe()) id: CardEntity): CardEntity {
        return id;
    };

    @Post('new')
    async createNewCard(@Body(new DefaultValuePipe({}), new ClassTranformerValidatorPipe()) createCard: CardEntity ) {
        console.log("before calling createcard");
        return await this.cardService.createCard(createCard);
    }

}