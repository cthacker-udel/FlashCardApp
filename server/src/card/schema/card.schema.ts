import { object, string } from "joi";


export const CardSchema = object({

    question: string().alphanum().min(3).required(),

    answer: string().alphanum().min(3).required()

});