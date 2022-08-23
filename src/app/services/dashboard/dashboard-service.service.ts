import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import {card} from '../../models/card'
@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {
  constructor(private http : HttpClient) {}
  
  getImg(imageUrl: string): Observable<Blob>{
    return this.http.get(imageUrl, {responseType: 'blob'});
  }
  

}
