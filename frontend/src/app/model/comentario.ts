import { Pessoa } from "./pessoa";

export class Comentario {
    id!: number;
    autor: Pessoa;
    comentario: string;
    idPost!: number;


    constructor(){
        this.autor = new Pessoa();
        this.comentario = "";
    }
}