import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Weather, WeatherForm } from 'src/app/modules/meteo/interfaces/weather';
import { ArchiveComponent } from '../archive/archive.component';
import { UserInterface } from 'src/app/modules/auth/interfaces/user';

@Component({
  selector: 'app-weather',  
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, AfterViewInit {

  @ViewChild(ArchiveComponent)
  private appArchive!: ArchiveComponent;

  @Input()
  public currentDate:Date = new Date();

  public communeId:number = 0;  
  public currentUser:UserInterface = {};
  public btnMoreHidden:boolean = false;
  public btnMoreDisable:boolean = true;
  public weatherForm : WeatherForm = {
    id: 0,
    start: this.currentDate.toISOString().substring(0,10),
    end: this.currentDate.toISOString().substring(0,10),
  }

  constructor(private activatedRoute:ActivatedRoute){
    this.currentUser = this.activatedRoute.snapshot.data["currentUser"]
    this.communeId = this.activatedRoute.snapshot?.params["id"];
    this.weatherForm.id = this.communeId
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.chargeArchive()
  }

  chargeArchive(): void{
    this.appArchive.loadArchive();    
  }  

  onEventBtnLoadDisable(event:boolean):void{
    this.btnMoreDisable = event
  }

  onEventBtnLoadHidden(event:boolean):void{
    this.btnMoreHidden = event
  }

  onEventWeather(weather:Weather):void{      
    this.appArchive.updateCharts(weather.hourly)
  }

}
