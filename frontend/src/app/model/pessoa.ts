export class Pessoa {
    email: string;
    nome:string;
    senha: string;
    jwt!:string

    constructor() {
      this.nome = '';
      this.email = '';
      this.senha = '';
    }
  }