import { CardEntity } from './entities/card.entity';
import { Injectable } from "@nestjs/common";
import { getMongoManager, MongoEntityManager } from "typeorm";




@Injectable()
export class NoteService {

    mongoManager: MongoEntityManager;

    async getAllCardsService(): Promise<CardEntity[]> {
        this.mongoManager = getMongoManager("mongo");
        return await this.mongoManager.find(CardEntity);
    };


};