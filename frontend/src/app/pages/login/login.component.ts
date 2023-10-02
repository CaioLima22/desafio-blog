import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from 'src/app/model/pessoa';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private loginService: LoginService, private router: Router, private activatedRoute: ActivatedRoute){};

  pessoa: Pessoa = new Pessoa();

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
