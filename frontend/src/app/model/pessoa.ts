export class Pessoa {
  id!: number;
  email: string;
  nome: string;
  senha: string;
  jwt!: string

  constructor() {
    this.nome = '';
    this.email = '';
    this.senha = '';
  }
}