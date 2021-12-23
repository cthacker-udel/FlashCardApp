import { LocalStrategy } from './local.strategy';
import { AuthService } from './auth.service';
import { UserModule } from './../users/user.module';
import { Module } from '@nestjs/common';


@Module({

    imports: [UserModule],
    exports: [],
    providers: [AuthService, LocalStrategy],
    controllers: []

}) export class AuthModule{};