import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginInterface, UserInterface} from "../interfaces/user";
import {BehaviorSubject, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  currentUser$ = new BehaviorSubject<any>(of());

  constructor(private http : HttpClient) { }

  login(loginInfo:LoginInterface):Observable<UserInterface>{
    return this.http.post<UserInterface>("http://localhost:8081/login",loginInfo).pipe(
      tap((user)=>this.currentUser$.next(user))
    );
  }

  signin(user:UserInterface) : Observable<UserInterface>{
    return this.http.post<UserInterface>("http://localhost:8081/signin",user)
  }

  logout():void{    
    this.currentUser$.next(null);
  }

}
