import { async, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { DepServService } from './dep-serv.service';
import { of} from 'rxjs';

describe('DepServService', () => {
  let service: DepServService;
  let HttpClient: HttpClient;

  beforeEach(async() => {
    service= new DepServService(HttpClient);
    // TestBed.configureTestingModule({});
    // service = TestBed.inject(DepServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it ('should return post data', () =>{
      let response !: [{
        Domain : string,
        Department :undefined,
        TeamID: number,
        Role: string
  }];
  let resp;
  spyOn(service, 'postDepartment').and.returnValue(of(response));
   service.postDepartment(response).subscribe(res=> {
           resp=res;
   });
  })
});
