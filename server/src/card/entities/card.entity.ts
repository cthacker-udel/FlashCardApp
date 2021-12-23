import { IsString } from "class-validator";
import { Column, Entity, ObjectIdColumn } from "typeorm";


@Entity()
export class CardEntity {

    @ObjectIdColumn()
    id: string

    @Column({default: "Default question"})
    question: string

    @Column({default: "Default answer"})
    answer: string

    constructor(newQuestion: string, newAnswer: string) {
        this.question = newQuestion;
        this.answer = newAnswer;
    };

};