import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent {

  constructor(private router: Router) {}
  crea_rubrique() { 
    this.router.navigate(['crea_rubrique']);
  }
  rubrique() { 
    this.router.navigate(['rubrique']);
  }

}
