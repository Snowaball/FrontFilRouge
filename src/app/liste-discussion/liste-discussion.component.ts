import { Subject } from 'rxjs';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DiscussionService } from '../services/discussion.service';

@Component({
  selector: 'app-liste-discussion',
  templateUrl: './liste-discussion.component.html',
  styleUrls: ['./liste-discussion.component.css']
})
export class ListeDiscussionComponent implements OnInit, OnDestroy{
  @Input()
  rubrique_id: number = 0;

  @Input()
  parent_id: number = 0;

  public discussions$ = new Subject<any>();
  constructor(public discussionService: DiscussionService){}


  ngOnInit(): void {
    this.discussionService.getDisscussions(this.rubrique_id, this.parent_id).subscribe(
      {
        next: (discussions) => {
          this.discussions$.next(discussions)
        }
      }
    )
  }
  ngOnDestroy(): void {

  }



}
