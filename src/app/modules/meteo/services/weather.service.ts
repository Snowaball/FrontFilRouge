import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Commune} from '../../recherche-commune/interfaces/commune';
import { Weather, WeatherForm } from '../interfaces/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private baseUrl:string = "http://localhost:8081/communes/";

  constructor(private http:HttpClient) { }

  public getCommuneById(id:number) : Observable<Commune>{
    return this.http.get<Commune>(this.baseUrl+id);
  }

  public getCommuneWeather(form:WeatherForm) : Observable<Weather>{
    return this.http.get<Weather>(this.baseUrl+form.id+"/weather?start="+form.start+"&end="+form.end);
  }

  public getCommuneArchiveWeather(form:WeatherForm) : Observable<Weather>{
    return this.http.get<Weather>(this.baseUrl+form.id+"/archive-weather?start="+form.start+"&end="+form.end);
  }

  public getCommuneAirQuality(form:WeatherForm) : Observable<Weather>{
    return this.http.get<Weather>(this.baseUrl+form.id+"/air-quality?start="+form.start+"&end="+form.end);
  }

}
