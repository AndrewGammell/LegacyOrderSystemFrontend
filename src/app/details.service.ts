import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDetails } from './interfaces/IDetails';


const API_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http: HttpClient) { }

  getDetail(orderId:number):Observable<IDetails>{
    return this.http.get<IDetails>(API_URL+'details/{{orderId}}');
  }

  getDetails(customerId:number):Observable<IDetails[]>{
    return this.http.get<IDetails[]>(API_URL+'details?customerId={{customerId}}');
  }

  postDetails(detail:IDetails):Observable<IDetails>{
    return null;
  }

  putDetails(detail:IDetails):Observable<IDetails>{
    return null;
  }

  deleteDetails(id:number):Observable<IDetails>{
    return null;
  }

}
