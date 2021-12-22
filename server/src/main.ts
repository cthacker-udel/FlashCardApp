import { MongoConfig } from './../config/mongo/mongo.config';
import { NestFactory } from '@nestjs/core';
import { ConnectionOptions, createConnection } from 'typeorm';
import { AppModule } from './app.module';
const cors = require('cors');

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.enableCors();
    app.use(cors());

    const connection = await createConnection(
        {...MongoConfig as ConnectionOptions}
    )


    await app.listen(3005);
}
bootstrap();
