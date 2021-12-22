import { NoteService } from './card.service';
import { Controller, Get } from "@nestjs/common";



@Controller('note')
export class NoteController {

    constructor( private readonly noteService: NoteService){}


    @Get('all')
    async getAllCards() {

        

    }


}