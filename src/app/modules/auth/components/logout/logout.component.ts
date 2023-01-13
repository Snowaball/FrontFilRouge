import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private authServ:AuthService, private router:Router){}
  
  public logout() : void{
    this.authServ.logout();
    this.router.navigate(["/communes"])
  }

}
