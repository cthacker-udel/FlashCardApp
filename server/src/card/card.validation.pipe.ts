import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { ObjectSchema } from "joi";
@Injectable()
export class ClassTranformerValidatorPipe implements PipeTransform {

    async transform (value: any, metadata: ArgumentMetadata) {

        if (!metadata || !this.toValidate(metadata.metatype)) { // checks if it is not null
            return value;
        }
        const object = plainToClass(metadata.metatype, value); // converts body to validation class aka dto class
        const errors = await validate(object); // validates converted object --> dto class
        if (errors.length > 0) {
            throw new BadRequestException('Validation failed');
        }
        return object;

    }


    private toValidate(metaType: Function) {
        const types: Function[] = [String, Boolean, Number, Array, Object];
        return !types.includes(metaType);
    }

};