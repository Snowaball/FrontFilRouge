import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-commune',
  templateUrl: './commune.component.html',
  styleUrls: ['./commune.component.css']
})
export class CommuneComponent implements OnInit, OnDestroy {
  
  @Input()
  public communeId : number = 0;
  public commune$ = new Subject<any>();
  private subscription = new Subscription();
  
  constructor(private weatherSrv:WeatherService){}
  
  public ngOnInit(): void {
    this.subscription = this.weatherSrv.getCommuneById(this.communeId).subscribe(
      (commune)=>this.commune$.next(commune)
    )
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
