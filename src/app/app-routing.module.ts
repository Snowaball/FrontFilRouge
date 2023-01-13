import { ForumComponent } from './forum/forum.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthModule } from './modules/auth/auth.module';
import { MeteoModule } from './modules/meteo/meteo.module';
const routes: Routes = [
  { path: 'forum', component: ForumComponent },
  { path: 'home', component: HomeComponent },
  {path:"login", loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},  
  {path:"meteo", loadChildren: () => import('./modules/meteo/meteo.module').then(m => m.MeteoModule)}, 
];

@NgModule({
  imports: [
    AuthModule,
    MeteoModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }