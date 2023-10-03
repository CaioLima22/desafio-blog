import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Input()
  logado: boolean = false;

  disableLinks:boolean = false;

  constructor(private router: Router){}


  logout(){
    localStorage.removeItem('pessoa');
    this.router.navigate(["/login"], { skipLocationChange: false })
  }

  ngOnInit(){
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentUrl = event.url;
        this.disableLinks = (currentUrl !== '/login' && currentUrl !== '/registro');
      }
    });
  }

}
