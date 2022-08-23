import { HttpClient } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';

import { DashboardServiceService } from './dashboard-service.service';

describe('DashboardServiceService', () => {
  let service: DashboardServiceService;
  let valueService: jasmine.SpyObj<DashboardServiceService>;
  let HttpClient: jasmine.SpyObj<HttpClient>;
  let HTTPService : DashboardServiceService;

  beforeEach(() => {
    HttpClient=jasmine.createSpyObj('HttpClient', ['getImg','get']);
    HTTPService = new DashboardServiceService(HttpClient);
    
    // Service
    const spy = jasmine.createSpyObj('DashboardServiceService', [ 'getImg'])
     TestBed.configureTestingModule({
       providers : [
        DashboardComponent,
        {provide: DashboardServiceService, useValue: spy}
       ]
     });
     valueService=TestBed.inject(DashboardServiceService) as jasmine.SpyObj<DashboardServiceService>;
     service=TestBed.inject(DashboardServiceService);

  });

  it('should call getImg',async (done: DoneFn) => {
    const url= 'assets/logo-actia.jpg';
    let blob=await fetch(url).then(r=>r.blob());
    // The url can be an object url or a normal url.
  service.getImg('test').subscribe(value=>{
    expect(value).toBe(blob);
    done()
  })
   //if you want to directly get a file from the promise, you can generate a file as follows
    /*await fetch(url).then(r => r.blob()).
    then(blobFile => new File([blobFile], "fileNameGoesHere",
     { type: "image/png" })*/
  });
});
