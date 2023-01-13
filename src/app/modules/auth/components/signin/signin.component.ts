import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/modules/auth/interfaces/user';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm:FormGroup = new FormGroup({});
  
  constructor(
    private fb:FormBuilder,
    private authSrv:AuthService,
    private router:Router
  ){}

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      civilite: ["Madame",[Validators.required]],
      nom: [null,[Validators.required]],
      prenom: [null,[Validators.required]],
      email: [null,[Validators.required]],
      mdp: [null,[Validators.required]],
      //mdp2: [null,[Validators.required]],
      ville: [null,[Validators.required]],
    })
  }

  onSubmit() : void{    
    
    if(this.signinForm.valid){    
      
      this.authSrv.signin(
        this.setUser(this.signinForm.value)
      )
      .subscribe((user)=>{        
        this.router.navigateByUrl("/login")
      })
    
    }

  }

  private setUser(values:any) : UserInterface{
    return {
      civilite: values['civilite'],
      nom: values['nom'],
      prenom: values['prenom'],
      email: values['email'],
      mdp: values['mdp'],
      adresse: {
        ville:values['ville']
      } 
    };
  }


}
