import { ComponentFixture, TestBed, async, fakeAsync, tick, waitForAsync } from "@angular/core/testing";
import { EmployeeComponent } from "../employee/employee.component";
 import * as Rx from 'rxjs';

import { delay, of } from 'rxjs';
import {  HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { MatDialog } from "@angular/material/dialog";
import { EmployeServService } from "../services/employee/employe-serv.service";
import { employe } from "../models/employee.model";
import { Component } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";




export class MatDialogMock {
  // When the component calls openDialog we'll return an object
    // with an afterClosed method that allows to subscribe to the dialog result observable.

  open() {
    return {
      afterClosed: () => of({action: true})
    };
  }
  
}



  describe ('EmployeeComponent ', ()=> {
   let component: EmployeeComponent;
   let fixture: ComponentFixture<EmployeeComponent>;
   let service : EmployeServService;
   beforeEach(async(()=>{
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule, BrowserAnimationsModule, ReactiveFormsModule
      ],
      declarations: [
        EmployeeComponent,
      ],
      providers :[
        EmployeServService,
        {provide: MatDialog, useClass: MatDialogMock}
       
      ]
    })
    .compileComponents();  // compile template and css
  }));

  beforeEach(async() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
    fixture.detectChanges();
  });
  afterEach(() => {
    fixture.destroy();
    component != null;
  });

  
   it('should call ngOnInit', () => {
    let spy_getAllemployee=spyOn(component,"getAllemployee").and.returnValue();
    component.ngOnInit();
  });

  it('should set the dataSource filter to the provided argument', () => {
    const filterValue = new Event('click');  
  spyOn(component, 'applyFilter');
  component.applyFilter(filterValue);
  expect(component.applyFilter);
  
    
  })
  
    /*Testing methods*/


   // I test the dialog here.
  it('should open the dialog', () => {
    component.openDialog();
  });


  //getAllEmployee
 it ('should call getAllEmployee', ()=>{
  let service=fixture.debugElement.injector.get(EmployeServService);
  let httpResponse= {
     employee : [new employe()]
  };
  let spyService=spyOn(service,'postEmployee').and.callThrough();
  spyOn(component, 'getAllemployee');
  component.getAllemployee();
 });

     /* Html testen*/
    

  });
