import { Rubrique } from './../models/rubrique';
import { Component } from '@angular/core';
import { RubriquesService } from '../services/rubriques.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-rubrique',
  templateUrl: './create-rubrique.component.html',
  styleUrls: ['./create-rubrique.component.css']
})
export class CreateRubriqueComponent {

  public rubrique: Rubrique = {id: 0, libelle: "", description: ""};
  constructor(private rubriqueService: RubriquesService, private router: Router){

  }
  public onSubmit(form: NgForm): void{
    if(form.valid){
      this.rubriqueService.setRubrique(form.value).subscribe(
        {
          next: (Rubrique)=>{
            this.router.navigate(['/forum']);
          },
          error: (err)=>{

          }
        }
      )
    }
  }

  
}
