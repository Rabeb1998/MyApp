import { HttpClient } from '@angular/common/http';
import { TestBed, async } from '@angular/core/testing';
import { Validators } from '@angular/forms';
import { AppComponent } from '../app.component';
import { EmployeServService } from './employe-serv.service';
import { of} from 'rxjs';

describe('EmployeServService', () => {
  let service: EmployeServService;
  let HttpClient: HttpClient;
  beforeEach(async() => {
    service= new EmployeServService(HttpClient);
    // TestBed.configureTestingModule({
    //    declarations: [
    //       AppComponent
    //    ],
    // }).compileComponents();
    

 });

  it('should return post data ', () => {
   
   let respons !: [{
    fullName: string;
    email?: undefined;
    mobile?: undefined;
    city?: undefined;
    gender?: undefined;
    department?: undefined;
    Date?: undefined;
    isPermanent?: undefined;
}];
    let resp;
      spyOn(service, 'postEmployee').and.returnValue(of(respons));
       service.postEmployee(respons).subscribe(res=> {
               resp=res;
       });

  });

  it('should return fetch data ', () => {
   
    let respons !: [{
     fullName: string;
     email?: undefined;
     mobile?: undefined;
     city?: undefined;
     gender?: undefined;
     department?: undefined;
     Date?: undefined;
     isPermanent?: undefined;
 }];
     let resp;
       spyOn(service, 'fetchEmployee').and.returnValue(of(respons));
        service.fetchEmployee().subscribe(res=> {
                resp=res;
        });
 
   });
});
