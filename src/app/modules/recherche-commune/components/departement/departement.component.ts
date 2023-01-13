import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Departement } from 'src/app/modules/recherche-commune/interfaces/commune';
import { CommuneService } from '../../services/commune.service';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {

  @Input()
  public regionId:number = 0

  public departements$:Observable<Departement[]> = of();

  constructor(private communeSrv:CommuneService){}

  public ngOnInit(): void {
    if(this.regionId>0) this.departements$ = this.communeSrv.getRegionDepartements(this.regionId);
  }

}
