import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-history',
  templateUrl: './releve.component.html',
  styleUrls: ['./releve.component.css']
})
export class ReleveComponent implements OnInit, AfterViewInit{
  
  @ViewChild(BaseChartDirective)
  public chart: BaseChartDirective | undefined;

  public title:string = "";

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: []
  };

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
  };

  public lineChartLegend = false;


  constructor(){}

  public ngOnInit() : void{}

  public ngAfterViewInit(): void {}

  public addData(times:string[], data:number[]) : void{
    
    if(!this.lineChartData.labels?.length) this.lineChartData.labels = times.map((s)=>new Date(s).toLocaleTimeString().substring(0,5));

    this.lineChartData.datasets[this.lineChartData.datasets.length] = {
      data: data,
      label: new Date(times[0]).getFullYear().toString(),
    }

    this.chart?.chart?.update();
  }

  public setTitle(title:string) : void{
    this.title = title
  } 

}
