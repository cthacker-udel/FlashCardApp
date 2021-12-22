import { IsString } from "class-validator";

export class CardDto {

    @IsString()
    question: string;


    @IsString()
    answer: string;
    
};