import { CardMiddleware } from './card.middleware';
import { CardController } from './card.controller';
import { CardService } from './card.service';
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";



@Module({
    imports: [],
    controllers: [CardController],
    providers: [CardService],
    exports: [CardService]
})
export class CardModule implements NestModule{

    configure(consumer: MiddlewareConsumer) {
        consumer
        .apply(CardMiddleware)
        .forRoutes('card');
    };

};
