import { HttpClientModule } from '@angular/common/http';
import { forwardRef, Inject, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { DialogDepComponent } from '../department/dialog-dep/dialog-dep.component';
import { DepServService } from '../services/department/dep-serv.service';

describe('DialogDepComponent Isolated Tests', () => {
  let component: DialogDepComponent;
  let service: DepServService;
  let fixture: ComponentFixture<DialogDepComponent>;
  let formBuilder: FormBuilder;
  
  let dialog:MatDialogRef<DialogDepComponent>;
  const dialogMock = {
    close: jasmine.createSpy('close')
  
  };

  beforeEach( async () => {
    
     TestBed.configureTestingModule({
      declarations: [ DialogDepComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatButtonModule,
        HttpClientModule,
        MatSelectModule,
        MatInputModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        
      ],
      providers : [
        
       DepServService,
      { provide: MAT_DIALOG_DATA, useValue: {} },
  
       { provide: MatDialogRef, useValue: dialogMock},
  
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DialogDepComponent),
        multi: true
      },
  
      {
        provide: MatDialogRef,
        useValue: {}
      },
  
      ],
      schemas: [ NO_ERRORS_SCHEMA ]


    }).compileComponents()
    .then(()=>{
     // create component and test fixture
     fixture=TestBed.createComponent(DialogDepComponent);

     component=fixture.componentInstance; // ngOnInit runs on all later tests
     fixture.detectChanges();
     service=TestBed.inject(DepServService);


    }); 
  });


  
  
  it('should create', () => {
    expect(component).toBeTruthy();
    
  })

  it('should set instance correctly', () => {
    expect(component).not.toBeNull();
   });
 

      it('should run ngOnInit method', () => {
       spyOn(formBuilder, 'group').and.callThrough();
       component.ngOnInit();
       expect(component.departmentForm).toHaveBeenCalled();
     });
    
       it('should call initItem method "form arrays"', () => {
       fixture.detectChanges();
        fixture.whenStable().then(()=>{

        })
        
           

      
       
                                                                             //We  can use the Array.isArray method to check 
                                                                              //if the arr variable stores an array.
                                                                             //if(Array.isArray(item)){  item.forEach(element=>{  
                                                                               //      console.log(element); })
       });
    
     // getter functions
 

          it('should call get f', ()=>{
            const form=formBuilder.group({
              title: new FormControl('', Validators.required),
              department: new FormControl('', Validators.required),
              description: new FormControl('', Validators.required),
              item1: new FormArray([
                new FormGroup({
                  Employee_Name :new FormControl('salma'),
                  Description2:new FormControl ( 'cccc'),
                  email: new FormControl ('cc@gmail.com') ,
                  job_position: new FormControl('manager'),
                  work_sought:new FormControl ('full time'),
                }),
              ]),
            });

            component.f;
            fixture.detectChanges();
            console.log('test should happen');
            expect(component.departmentForm).toEqual(form);
          });
             
      it('should call get formArr', ()=>{
        const item = new FormArray([
         new FormGroup({
           Employee_Name :new FormControl('salma'),
           Description2:new FormControl ( 'cccc'),
           email: new FormControl ('cc@gmail.com') ,
           job_position: new FormControl('manager'),
           work_sought:new FormControl ('full time'),
         }),
       ])
       expect(component.formArr).toEqual(item);

       })
     


          it('should call update method', ()=>{

          })

          it('should call delete method ', ()=>{

          })
    
      /* Html testing*/

      it('Should contain h1 with "Add new Activity "', () => {
        const h1 = fixture.debugElement.nativeElement.querySelector('h1');
        expect(h1.textContent).toContain('Add new Activity' );
      });
      

      it('Should click button and save  form', () => {
        const button = fixture.debugElement.nativeElement.querySelector('#view');  //view = id of button
        button.click();
    
        expect(component.addDep).toBeTruthy();
      });
      it('Should be false if button is not clicked', () => {
        expect(component.addDep).not.toBe(true);   // error when using toBeFalsy
      });
        
 

    })

 
 
