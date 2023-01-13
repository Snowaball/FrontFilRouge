import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionComponent } from './components/region/region.component';
import { CommuneComponent } from './components/commune/commune.component';
import { DepartementComponent } from './components/departement/departement.component';
import { FormCommuneComponent } from './components/form-commune/form-commune.component';
import { RouterModule, Routes } from '@angular/router';
import { AlertComponent } from 'src/app/shared/alert/alert.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserResolver } from 'src/app/shared/resolvers/user.resolver';

const routes:Routes = [
  {
    path:"communes", 
    component:FormCommuneComponent,
    resolve: {
      user:UserResolver
    }
  },  
]

@NgModule({
  declarations: [    
    RegionComponent,
    CommuneComponent,
    DepartementComponent,
    FormCommuneComponent,    
  ],
  providers: [ 
    UserResolver,
  ],
  imports: [
    AlertComponent,
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forChild(routes),
  ],
})
export class RechercheCommuneModule { }
