import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Module } from "@nestjs/common";




@Module({

    imports: [],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]

}) export class UserModule {}