import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sort } from '../models/sort';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor(private http: HttpClient) {}

  get() : Observable<Sort[]>{
    return this.http.get<Sort[]>(environment.iutApiBaseUrl+"/Sorts");
  }

  getById(id: number) : Observable<Sort>{
    return this.http.get<Sort>(environment.iutApiBaseUrl+"/Sorts/" + id);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(environment.iutApiBaseUrl + '/Sorts/' + id);
  }

  update(Sort: Sort): Observable<string>{
    return this.http.put<string>(environment.iutApiBaseUrl+"/Sorts/"+ Sort.id, Sort);
  }

  create(Sort: Sort): Observable<string>{
    return this.http.post<string>(environment.iutApiBaseUrl+"/Sorts", Sort);
  }
}
