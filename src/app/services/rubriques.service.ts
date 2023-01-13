import { Rubrique } from './../models/rubrique';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RubriquesService {

  constructor(private HttpClient: HttpClient) { 
    
  }

  public getRubriques():Observable<Rubrique[]>{
    
    return this.HttpClient.get<Rubrique[]>("http://localhost:8081/rubriques")
  }

  public getRubrique(id: number):Observable<Rubrique>{

    return this.HttpClient.get<Rubrique>("http://localhost:8081/rubriques/"+id)
  }

  public setRubrique(rubrique: Rubrique):Observable<Rubrique>{
    
    return this.HttpClient.post<Rubrique>("http://localhost:8081/rubriques", rubrique)
  }
}
