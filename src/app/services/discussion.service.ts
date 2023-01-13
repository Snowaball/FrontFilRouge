import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Discussion } from '../models/discussion';
@Injectable({
  providedIn: 'root'
})
export class DiscussionService {

  constructor(private HttpClient: HttpClient) { 
    
  }

  public getDisscussions(rubrique_id: number, parent_id: number):Observable<Discussion[]>{
    
    return this.HttpClient.get<Discussion[]>("http://localhost:8081/rubriques/"+ rubrique_id + "/discussions?parentId="+parent_id  )
  }
  public setDiscussion(discussion: Discussion):Observable<Discussion>{
    
    return this.HttpClient.post<Discussion>("http://localhost:8081/discussions", discussion)
  }
}
