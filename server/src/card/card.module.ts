import { CardController } from './card.controller';
import { CardService } from './card.service';
import { Module } from "@nestjs/common";



@Module({
    imports: [],
    controllers: [CardController],
    providers: [CardService],
    exports: [CardService]
})
export class CardModule{};
