import { Injectable } from "@nestjs/common";
import { getMongoManager, MongoEntityManager } from "typeorm";




@Injectable()
export class NoteService {

    mongoManager: MongoEntityManager;

    async getAllCardsService(){

        this.mongoManager = getMongoManager("mongo");
        return await this.mongoManager.find();

    }


};