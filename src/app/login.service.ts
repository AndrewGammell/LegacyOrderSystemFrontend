import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from './interfaces/IUser';



const API_URL = environment.apiURL;



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { 
  
  }

  login(email:string, password:string): Observable<IUser>{
    console.log('In login() in the login service');
    return this.http.get<IUser>(API_URL+'user?email='+ email +'&password='+ password);
  }
  
}

