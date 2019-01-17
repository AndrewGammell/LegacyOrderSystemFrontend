import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IOrders } from './interfaces/IOrders';

const API_URL = environment.apiURL;


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  getOrder(orderId:number):Observable<IOrders>{
    return this.http.get<IOrders>(API_URL+'orders/{{orderId}}');
  }

  getOrders(customerId:number):Observable<IOrders[]>{
    return this.http.get<IOrders[]>(API_URL+'orders?customerId={{customerId}}');
  }

  postOrder(order:IOrders):Observable<IOrders>{
    return null;
  }

  putOrder(order:IOrders):Observable<IOrders>{
    return null;
  }

  deleteOrder(order:IOrders):boolean{
    return null;
  }
  
}
