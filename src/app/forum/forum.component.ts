import { RubriquesService } from './../services/rubriques.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit, OnDestroy{

  subscription = new Subscription();
  rubriques$ = new Subject<any>();

  constructor(private rubrique: RubriquesService) { 
    
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.rubrique.getRubriques().subscribe(
      (rubriques)=> this.rubriques$.next(rubriques)
    )
  }

  

}
