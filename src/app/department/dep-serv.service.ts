import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepServService {

  constructor(private http:HttpClient) { }

  postDepartment (data: any){
    return this.http.post<any>("http://localhost:3000/Department/", data);
  }
  getDepartment (){
    return this.http.get<any>("http://localhost:3000/Department/");
  }
}
