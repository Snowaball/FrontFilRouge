import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Commune } from 'src/app/modules/recherche-commune/interfaces/commune';
import { CommuneService } from '../../services/commune.service';

@Component({
  selector: 'app-commune',
  templateUrl: './commune.component.html',
  styleUrls: ['./commune.component.css']
})
export class CommuneComponent implements OnInit {

  @Input()
  public departementId:number = 0;
  public communes$:Observable<Commune[]> = of();

  constructor(private communeSrv:CommuneService){}

  public ngOnInit(): void {
    if(this.departementId>0) this.communes$ = this.communeSrv.getDepartementCommunes(this.departementId);
  }

}
