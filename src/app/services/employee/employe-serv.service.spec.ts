import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TestBed, async } from '@angular/core/testing';
import { Validators } from '@angular/forms';
import { AppComponent } from '../../app.component';
import { EmployeServService } from './employe-serv.service';
import { of} from 'rxjs';
import { EmployeeComponent } from '../../employee/employee.component';

describe('EmployeServService', async() => {
  let service: EmployeServService;
  let emp : EmployeeComponent;
  let valueService: jasmine.SpyObj<EmployeServService>;
  let HttpClient: jasmine.SpyObj<HttpClient>;
  let HTTPService : EmployeServService;
  beforeEach(() => {
    // TODO: spy on other methods
    //HTTP
    HttpClient=jasmine.createSpyObj('HttpClient', ['fetchEmployee', 'get']);
    HTTPService = new EmployeServService(HttpClient);
  
    // Service
    const spy = jasmine.createSpyObj('EmployeServService', ['fetchEmployee', 'postEmployee'])
     TestBed.configureTestingModule({
       providers : [
        EmployeeComponent,
        {provide: EmployeServService, useValue: spy}
       ]
     });
     service=TestBed.inject(EmployeServService);
     valueService=TestBed.inject(EmployeServService) as jasmine.SpyObj<EmployeServService>;

 });

  it(' fetchEmployee should return val from a spy ', () => {
   const employe : any ={
    fullName : 'Rabeb',
     email: 'rabeb@gmail.com', 
     mobile: 784451266, 
     city: 'kebili', 
     gender: 'female'
   };  
   valueService.fetchEmployee.and.returnValue(employe);
  expect(service.fetchEmployee())
  .withContext('service returned value')
  .toBe(employe);
  expect(valueService.fetchEmployee.calls.count())
  .withContext('spy method was called once')
  .toBe(1);
  expect(valueService.fetchEmployee.calls.mostRecent().returnValue)
  .toBe(employe);
});

 it('postEmployee should return value from a spy ', () => {
   const value : any ={
     fullName : 'Rabeb',
     email: 'rabeb@gmail.com', 
     mobile: 784451266, 
     city: 'kebili', 
     gender: 'female'
   }; 
   let data; 
   valueService.postEmployee.and.returnValue(value);
  expect(service.postEmployee(data))
  .withContext('service returned value')
  .toBe(value);
 expect(valueService.postEmployee.calls.count())
  .withContext('spy method was called once')
  .toBe(1);
  expect(valueService.postEmployee.calls.mostRecent().returnValue)
  .toBe(value);
 });

//  HTTP
it('should return expected http (HttpClient called once)', (done: DoneFn) =>{
  const expectedHTTP : any []=
  [
    {fullName : 'flen'},
     {email: 'flen@gmail.com'}, 
     {mobile: 5741000000}, 
     {city: 'tunis'}, 
     {gender: 'Male'} 
  ];
HttpClient.get.and.returnValue(of(expectedHTTP));
HTTPService.fetchEmployee().subscribe({
  next: http =>{
    expect(http)
    .withContext('expected http')
    .toEqual(expectedHTTP);
    done();
  },
  error: done.fail
});
expect(HttpClient.get.calls.count())
.withContext('one call')
.toBe(1);
});
xit ('should return an error when the server return 404', (done: DoneFn) => {
  const errorResponse= new HttpErrorResponse({
    error: 'test 404 error',
    status: 404, statusText: 'No Found'
  });
  HttpClient.get.and.returnValue(of(errorResponse));
  HTTPService.fetchEmployee().subscribe({
    next: http =>done.fail('expected an error, not http'),
    error: error =>{
      expect(error.message).toContain('test 404 error');
      done();
    }
  });
});
});
