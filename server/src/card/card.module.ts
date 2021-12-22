import { CardMiddleware } from './card.middleware';
import { CardController } from './card.controller';
import { CardService } from './card.service';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";



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
        .exclude({path: "example", method: RequestMethod.DELETE})
        .forRoutes(CardController);
    };

};
