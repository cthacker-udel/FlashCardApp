import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";



@Injectable()
export class AuthService extends PassportStrategy{

    constructor(){
        super({}, () => {
            return null;
        });
    }

}