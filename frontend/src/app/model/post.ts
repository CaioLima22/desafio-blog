export class Post {
    id!: number;
    titulo: string;
    conteudo: string;
    image!: File | null;
    autor_id!:number;

    //Transient
    nomeAutor!: string;

    constructor(){
        this.titulo = "";
        this.conteudo = "";
    }
}