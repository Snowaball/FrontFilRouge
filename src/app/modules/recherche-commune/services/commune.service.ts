import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commune, Departement, Region } from '../interfaces/commune';

@Injectable({
  providedIn: 'root'
})
export class CommuneService {

  private baseUrl:string = "http://localhost:8081/";

  constructor(private http:HttpClient) { }

  public getRegions() : Observable<Region[]>{
    return this.http.get<Region[]>(this.baseUrl+"regions");
  }

  public getRegionDepartements(idRegion:number) : Observable<Departement[]>{
    return this.http.get<Departement[]>(this.baseUrl+"regions/"+idRegion+"/departements");
  }

  public getDepartementCommunes(idDepartement:number) : Observable<Commune[]>{
    return this.http.get<Commune[]>(this.baseUrl+"departements/"+idDepartement+"/communes");
  }

  public getCommuneByLibelle(libelle:string) : Observable<Commune[]>{
    return this.http.get<Commune[]>(this.baseUrl+"communes?libelle="+libelle);
  }

  public getCommuneById(id:number) : Observable<Commune>{
    return this.http.get<Commune>(this.baseUrl+"communes/"+id);
  }

}
