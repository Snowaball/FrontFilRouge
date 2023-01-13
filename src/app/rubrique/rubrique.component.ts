import { Discussion } from './../models/discussion';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Rubrique } from '../models/rubrique';
import { RubriquesService } from '../services/rubriques.service';
import { NgForm } from '@angular/forms';
import { DiscussionService } from '../services/discussion.service';
import { Subject, Subscription } from 'rxjs';
@Component({
  selector: 'app-rubrique',
  templateUrl: './rubrique.component.html',
  styleUrls: ['./rubrique.component.css']
})
export class RubriqueComponent implements OnInit, OnDestroy{

  subscription = new Subscription();
  idRubrique: number = 0; 
  rubrique: Rubrique = {id: 0, libelle: "", description: ""};
  discussion: Discussion = {};

  constructor(private rubriqueService: RubriquesService, private router: Router, private activatedRoute: ActivatedRoute, private discussionService: DiscussionService){
    let id= this.activatedRoute.snapshot.paramMap.get("id")
    if(id){
      this.idRubrique = parseInt(id);
    }
    
    
  }
  ngOnInit(): void {

    this.rubriqueService.getRubrique(this.idRubrique).subscribe(
      {
        next: (rubrique)=>{
          this.rubrique= rubrique
        },
        error: (err)=>{

        }
      }
    )
  }

  public onSubmit(form: NgForm): void{
    if(form.valid){
      this.discussion.message = form.value['message'];
      this.discussion.rubrique_id = this.rubrique.id;
      this.discussion.utilisateur_id = 1;
      this.discussion.parent_id_id = 0;
      this.discussionService.setDiscussion(this.discussion).subscribe(
        {
          next: (Discussion)=>{
            window.location.reload()
          },
          error: (err)=>{

          }
        }
      )
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }




}
