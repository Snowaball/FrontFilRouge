import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { Region } from 'src/app/modules/recherche-commune/interfaces/commune';
import { CommuneService } from '../../services/commune.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit{

    regions$ = new Observable<Region[]>;
    
    constructor(private communeSrv:CommuneService){}

    ngOnInit(): void {
      this.regions$ = this.communeSrv.getRegions();      
    }

}


