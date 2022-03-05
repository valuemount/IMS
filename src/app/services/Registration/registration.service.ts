import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient:HttpClient) { }

  postRegistration(register:any):Observable<any>
  {
    return this.httpClient.post("assets/data/registration.json",register)
  }
}
