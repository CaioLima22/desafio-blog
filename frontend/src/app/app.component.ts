import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  showNavbar: boolean = false;
  pessoaLogada: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentUrl = event.url;
        if (currentUrl !== '/login' && currentUrl !== '/register') {
          this.showNavbar = true;
        } else {
          this.showNavbar = false;
        }
      }
    });
    if (localStorage.getItem('pessoa')){
      let pessoaLogada = JSON.parse(localStorage.getItem('pessoa')?? "");
      if(pessoaLogada && pessoaLogada.jwt){
        this.pessoaLogada = true
      }
    }
  }
}
