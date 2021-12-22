import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class ValidationPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        console.log("metadata type = ", metadata.type);
        console.log("metaType = ", metadata.metatype);
        console.log("data = ", metadata.data);
        return value;
    };
};