import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './components/weather/weather.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { ReleveComponent } from './components/releve/releve.component';
import { RouterModule, Routes } from '@angular/router';
import { WindDirectionPipe } from './pipes/wind-direction.pipe';
import { NgChartsModule } from 'ng2-charts';
import { RechercheCommuneModule } from '../recherche-commune/recherche-commune.module';
import { CommuneComponent } from './components/commune/commune.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { AlertComponent } from "../../shared/alert/alert.component";
import { UserResolver } from 'src/app/shared/resolvers/user.resolver';

const routes:Routes = [
  {
    path:"meteo/:id", 
    component:WeatherComponent,
    resolve: {
        currentUser: UserResolver,
    },
  },
  {
    path:"commune", 
    loadChildren: () => import('../recherche-commune/recherche-commune.module').then(m => m.RechercheCommuneModule),
  },  
]

@NgModule({
    declarations: [
        WeatherComponent,
        ArchiveComponent,
        ReleveComponent,
        WindDirectionPipe, 
        CommuneComponent, 
        CurrentWeatherComponent,
    ],
    providers: [ 
        UserResolver,
    ],
    imports: [
        CommonModule,
        NgChartsModule,
        RechercheCommuneModule,
        RouterModule.forChild(routes),
        AlertComponent
    ]
})
export class MeteoModule { }
