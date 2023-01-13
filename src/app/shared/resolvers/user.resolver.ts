import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, take } from 'rxjs';
import { AuthService } from '../../modules/auth/services/auth.service';
import { UserInterface } from '../../modules/auth/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<UserInterface> {

  constructor(private authService:AuthService){}

  resolve(): Observable<UserInterface> {    
    return this.authService.currentUser$.pipe(
      take(1)
    )
  }
}
