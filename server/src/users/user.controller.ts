import { UserService } from './user.service';
import { Controller, Get } from '@nestjs/common';



@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService){}

    @Get('all')
    async getAllUsers() {

        return this.userService.getUsers

    }


};
