import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Classe } from '../models/classe';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  constructor(private http: HttpClient) {}

  get() : Observable<Classe[]>{
    return this.http.get<Classe[]>(environment.iutApiBaseUrl+"/Classes");
  }

  getById(id: number) : Observable<Classe>{
    return this.http.get<Classe>(environment.iutApiBaseUrl+"/Classes/" + id);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(environment.iutApiBaseUrl + '/Classes/' + id);
  }

  update(Classe: Classe): Observable<string>{
    return this.http.put<string>(environment.iutApiBaseUrl+"/Classes/"+Classe.id, Classe);
  }

  create(Classe: Classe): Observable<string>{
    return this.http.post<string>(environment.iutApiBaseUrl+"/Classes", Classe);
  }
}
