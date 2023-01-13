import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {

  public loginForm!:FormGroup;
  public formErrorHidden: boolean = true;

  constructor(private authService:AuthService, private fb : FormBuilder, private router:Router){}

  ngOnInit(): void {
    
    this.loginForm = this.fb.group({
      email:[null,[Validators.required,Validators.email,Validators.minLength(6),Validators.maxLength(100)]],
      password:[null,[Validators.required,Validators.minLength(8),Validators.maxLength(60)]]
    })

  }

  onSubmit(){
    
    let encodeLogin = window.btoa(
      this.loginForm.get("email")?.value+':'+this.loginForm.get("password")?.value
    )
    
    this.authService.login(this.loginForm.value).subscribe({
      next:(res)=>{
        if(res){
          res.token = encodeLogin;
          this.router.navigate(["/communes"])
        }else{
          this.formErrorHidden = false;
        
        }
        
      },
      error: (err)=>{

        console.log("ERREUR : ",err);
        this.formErrorHidden = false;
        
      }
    })
  }

}
