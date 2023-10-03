import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from 'src/app/model/pessoa';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {

  
  pessoa: Pessoa = new Pessoa();

  constructor(private loginService: LoginService, private router: Router, private activatedRoute: ActivatedRoute){};


  fazerCadastro() {
    this.loginService.cadastro(this.pessoa)
      .subscribe((response: any) => {
        if (response) {
          this.fazerLogin();
        }
      });
  }

  fazerLogin() {
    this.loginService.login(this.pessoa)
      .subscribe((response: any) => {
        if (response) {
          this.pessoa.jwt = response.token;
          this.pessoa.id = response.pessoa.id;
          this.pessoa.nome = response.pessoa.nome;
          localStorage.setItem('pessoa', JSON.stringify(this.pessoa));
          this.router.navigate(["/feed"]);
        }
      });
  }

}
