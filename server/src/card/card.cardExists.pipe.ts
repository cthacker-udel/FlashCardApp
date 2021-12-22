import { BadRequestException } from '@nestjs/common';
import { CardEntity } from './entities/card.entity';
import { getMongoManager } from 'typeorm';
import { ArgumentMetadata } from '@nestjs/common';
import { PipeTransform } from '@nestjs/common';
import { Injectable } from '@nestjs/common';


@Injectable()
export class CardExistsPipe implements PipeTransform {

    async transform(value: string, metadata: ArgumentMetadata) {
        const mongoManager = getMongoManager("mongo");
        const result = await mongoManager.findOne(CardEntity, {
            question: value
        });
        if (result === undefined) {
            throw new BadRequestException('Card does not exist in database');
        }
        return result;
    };
};