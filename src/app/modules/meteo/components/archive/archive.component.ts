import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { HistoryChart, Weather, WeatherForm } from 'src/app/modules/meteo/interfaces/weather';
import { WeatherService } from 'src/app/modules/meteo/services/weather.service';
import { ReleveComponent } from '../releve/releve.component';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css'],  
})
export class ArchiveComponent implements OnInit, OnDestroy {

  @Input()
  public weatherForm:WeatherForm = {};

  @Input()
  public portion: number = 10;

  @Input()
  public anneeInitial: number = 0;

  @Output() eventBtnLoadHidden = new EventEmitter<boolean>();
  @Output() eventBtnLoadDisable = new EventEmitter<boolean>();

  private anneePrecedente: number = 1;
  private anneeEnd: number = this.anneePrecedente+this.portion;
  private subscription = new Subscription();

  @ViewChildren(ReleveComponent)
  private appHistory!: QueryList<ReleveComponent>;
  

  public listeReleves:HistoryChart[] = [
    {
      title: "Température",
      releve:"temperature_2m"
    },
    {
      title: "Humidité",
      releve:"relativehumidity_2m"
    },
    {
      title: "Point de rosée",
      releve:"dewpoint_2m"
    },
    {
      title: "Température ressentie",
      releve:"apparent_temperature"
    },
    {
      title: "Pression",
      releve:"pressure_msl"
    },
    {
      title: "surface_pressure",
      releve:"surface_pressure"
    },
    {
      title: "precipitation",
      releve:"precipitation"
    },
    {
      title: "snowfall",
      releve:"snowfall"
    },
    {
      title: "cloudcover",
      releve:"cloudcover"
    },
    {
      title: "cloudcover_low",
      releve:"cloudcover_low"
    },
    {
      title: "cloudcover_mid",
      releve:"cloudcover_mid"
    },{
      title: "cloudcover_high",
      releve:"cloudcover_high"
    },{
      title: "shortwave_radiation",
      releve:"shortwave_radiation"
    },{
      title: "direct_radiation",
      releve:"direct_radiation"
    },{
      title: "diffuse_radiation",
      releve:"diffuse_radiation"
    },{
      title: "direct_normal_irradiance",
      releve:"direct_normal_irradiance"
    },{
      title: "windspeed_10m",
      releve:"windspeed_10m"
    },{
      title: "windspeed_100m",
      releve:"windspeed_100m"
    },{
      title: "winddirection_10m",
      releve:"winddirection_10m"
    },{
      title: "winddirection_100m",
      releve:"winddirection_100m"
    },
    {
      title: "windgusts_10m",
      releve:"windgusts_10m"
    },{
      title: "et0_fao_evapotranspiration",
      releve:"et0_fao_evapotranspiration"
    },{
      title: "vapor_pressure_deficit",
      releve:"vapor_pressure_deficit"
    },{
      title: "soil_temperature_0_to_7cm",
      releve:"soil_temperature_0_to_7cm"
    },{
      title: "soil_temperature_7_to_28cm",
      releve:"soil_temperature_7_to_28cm"
    },{
      title: "soil_temperature_28_to_100cm",
      releve:"soil_temperature_28_to_100cm"
    },{
      title: "soil_temperature_100_to_255cm",
      releve:"soil_temperature_100_to_255cm"
    },{
      title: "soil_moisture_0_to_7cm",
      releve:"soil_moisture_0_to_7cm"
    },{
      title: "soil_moisture_7_to_28cm",
      releve:"soil_moisture_7_to_28cm"
    },{
      title: "soil_moisture_28_to_100cm",
      releve:"soil_moisture_28_to_100cm"
    },{
      title: "soil_moisture_100_to_255cm",
      releve:"soil_moisture_100_to_255cm"
    },
] 

  constructor(private communeSrv:WeatherService){}
  
  public ngOnInit(): void {}
  
  public ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  public loadArchive(){
    
      this.eventBtnLoadDisable.emit(true)
      
      this.subscription.add(

        this.communeSrv.getCommuneArchiveWeather(
          this.setWeatherForm()
        ).subscribe(
          {
            next:(w)=>this.updateCharts(w.hourly,true),
            error:(err)=>this.eventBtnLoadHidden.emit(true)
          }
        ) 

      ) 

  }

  public updateCharts(releves:any,next:boolean=false){
    
    this.listeReleves.forEach((releve,index)=>{
      let chart = this.appHistory.get(index);
      chart?.setTitle(releve.title)
      chart?.addData(releves["time"],releves[releve.releve]);          
    })

    if(next) this.next();

  }


  private next() : void {                
    (++this.anneePrecedente<this.anneeEnd) ? this.loadArchive() : this.end();      
  }

  private end() : void {
      this.eventBtnLoadDisable.emit(false);
      this.anneeEnd+=this.portion;
  }

  private setDateYear(date:string,year:number) : number{
    return new Date(date).setFullYear(year);
  }

  private getIsoDate(date:string|number|Date) : string{
    return new Date(date).toISOString().substring(0,10);
  }

  private setWeatherForm() : WeatherForm{

    let y = this.anneeInitial-this.anneePrecedente
      
    if(this.weatherForm.start){        
      this.weatherForm.start = this.getIsoDate(
        this.setDateYear(this.weatherForm.start,y)
      )        
    }

    if(this.weatherForm.end){        
      this.weatherForm.end = this.getIsoDate(
        this.setDateYear(this.weatherForm.end,y)
      )        
    }

    return this.weatherForm

  }
}
