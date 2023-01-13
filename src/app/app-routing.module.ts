import { RubriqueComponent } from './rubrique/rubrique.component';
import { ForumComponent } from './forum/forum.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotificationComponent } from './notification/notification.component';
import { CreateRubriqueComponent } from './create-rubrique/create-rubrique.component';

const routes: Routes = [
  { path: 'forum', component: ForumComponent },
  { path: 'home', component: HomeComponent },
  { path: 'notif', component: NotificationComponent },
  { path: 'crea_rubrique', component: CreateRubriqueComponent },
  { path: 'rubriques/:id', component: RubriqueComponent },
  { path: '**', redirectTo: "home", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }