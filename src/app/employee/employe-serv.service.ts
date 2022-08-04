import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeServService {
    editEmployee: any;
  

  constructor(private http: HttpClient) { }


  postEmployee(data: any) {
    return this.http.post<any>("http://localhost:3000/employeeList/",data);
    
  
   }
 
   fetchEmployee() {
     return this.http.get<any>("http://localhost:3000/employeeList/");
     
 
   }
   putEmployee (data:any, id: number){
    return this.http.put<any>("http://localhost:3000/employeeList/"+id, data);

   }

   deleteEmployee (id:number){
    return this.http.delete<any>("http://localhost:3000/employeeList/"+id);
   }
}
