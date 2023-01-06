import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ForumComponent } from './forum/forum.component';
import { HomeComponent } from './home/home.component';
import { NotificationComponent } from './notification/notification.component';
import { CreateRubriqueComponent } from './create-rubrique/create-rubrique.component';
import { RubriqueComponent } from './rubrique/rubrique.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ForumComponent,
    HomeComponent,
    NotificationComponent,
    CreateRubriqueComponent,
    RubriqueComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
