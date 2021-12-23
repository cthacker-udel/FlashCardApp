import { Injectable } from "@nestjs/common";



@Injectable()
export class UserService {

    async getUsers() {
        return new Promise<string>((res, err) => {
            return 'success';
        });
    }

};
