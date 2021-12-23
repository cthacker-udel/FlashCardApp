import { UserService } from './../users/user.service';
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";



@Injectable()
export class AuthService{

    constructor( private readonly userService: UserService){}

    async validateUser (username: string, password: string) {

        const user = await this.userService.

    }

}