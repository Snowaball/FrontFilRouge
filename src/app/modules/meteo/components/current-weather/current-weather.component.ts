import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, forkJoin } from 'rxjs';
import { WeatherService } from '../../services/weather.service';
import { Weather, WeatherForm } from '../../interfaces/weather';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit, OnDestroy {

  @Input()
  public currentWeather : WeatherForm = {
    id: 0,
    start: "",
    end: "",
  };
  
  @Output() eventWeather = new EventEmitter<Weather>();

  public weather$ = new Subject<any>();
  private subscription = new Subscription();
  
  constructor(private weatherSrv:WeatherService){}
  
  public ngOnInit(): void {
    this.subscription = forkJoin(
      {
        weather:      this.weatherSrv.getCommuneWeather(this.currentWeather),
        airQuality:   this.weatherSrv.getCommuneAirQuality(this.currentWeather),        
      }
    ).subscribe(
      (weather) => {
        this.weather$.next(weather);
        this.eventWeather.emit(weather.weather);
      }
    )
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
