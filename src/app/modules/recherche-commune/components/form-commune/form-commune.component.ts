
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { CommuneService } from '../../services/commune.service';
import { ActivatedRoute } from '@angular/router';
import { UserInterface } from 'src/app/modules/auth/interfaces/user';

@Component({
  selector: 'app-form-commune',
  templateUrl: './form-commune.component.html',
  styleUrls: ['./form-commune.component.css']
})
export class FormCommuneComponent implements OnInit, OnDestroy {

  private subscription = new Subscription();
  public rechercheForm:FormGroup = new FormGroup({});
  public communes$ = new Subject<any>();
  public currentUser:UserInterface = {};

  constructor(
    private communeSvr: CommuneService,
    private fb:FormBuilder,
    private activatedRoute:ActivatedRoute
  ){        
    this.currentUser = this.activatedRoute.snapshot.data["user"];
  }

  public ngOnInit(): void {
    this.rechercheForm = this.fb.group({
      libelle: [null,[Validators.required]]
    })
  }

  public onSubmit() : void{
    if(this.rechercheForm.get("libelle")?.value.length>2){          
      this.subscription = this.communeSvr.getCommuneByLibelle(this.rechercheForm.get("libelle")?.value).subscribe(
        (communes)=>this.communes$.next(communes)
      );         
    }else{
      this.communes$.next(null);
    }
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
  
}
