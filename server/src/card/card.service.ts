import { CardEntity } from './entities/card.entity';
import { Injectable } from "@nestjs/common";
import { getMongoManager, MongoEntityManager } from "typeorm";




@Injectable()
export class CardService {

    mongoManager: MongoEntityManager;

    async getAllCardsService(): Promise<CardEntity[]> {
        this.mongoManager = getMongoManager("mongo");
        return await this.mongoManager.find(CardEntity);
    };

    async getSpecificCard(filterQuestion: string): Promise<CardEntity> {
        this.mongoManager = getMongoManager("mongo");
        return await this.mongoManager.findOne(CardEntity, {
            question: filterQuestion
        });
    };

    async createCard(card: CardEntity): Promise<CardEntity> {
        this.mongoManager = getMongoManager("mongo");
        return await this.mongoManager.save(card);
    };


};