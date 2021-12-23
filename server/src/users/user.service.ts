import { UserEntity } from './entities/user.entity';
import { getMongoManager } from 'typeorm';
import { BadRequestException, Injectable } from "@nestjs/common";



@Injectable()
export class UserService {

    async getUsers() {
        const mongoManager = getMongoManager("mongo");
        try{
            return await mongoManager.find(UserEntity);
        } catch (error) {
            throw new BadRequestException("Unable to find user in database");
        }
    }

    async getUser(username: string) {

        const mongoManager = getMongoManager("mongo");
        try{
            return await mongoManager.findOne(UserEntity, {
                username: username
            });
        } catch (error) {
            throw new BadRequestException('User does not exist in database');
        }

    }

};
