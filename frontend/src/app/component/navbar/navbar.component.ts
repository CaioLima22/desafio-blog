import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Input()
  logado: boolean = false;

  constructor(private router: Router){}


  logout(){
    localStorage.removeItem('pessoa');
    this.router.navigate(["/login"], { skipLocationChange: false })
  }

}
