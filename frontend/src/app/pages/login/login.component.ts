import { Component } from '@angular/core';
import { Pessoa } from 'src/app/model/pessoa';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private loginService: LoginService){};

  pessoa: Pessoa = new Pessoa();


  fazerLogin() {
    this.loginService.login(this.pessoa)
      .subscribe((response) => {
        if(response){
          console.log(response);
        }
      });
  }

}
