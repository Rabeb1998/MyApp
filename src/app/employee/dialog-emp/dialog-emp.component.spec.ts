import { HttpClientTestingModule} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { EmployeServService } from '../employe-serv.service';
import { EmployeeComponent } from '../employee.component';

import { DialogEmpComponent } from './dialog-emp.component';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';





describe('DialogEmpComponent', () => {
  let component: DialogEmpComponent;
  let fixture: ComponentFixture<DialogEmpComponent>;

  beforeEach( async () => {
    // const EmployeServServiceSpy =jasmine.createSpyObj(['addemployee']);
    // EmployeServServiceSpy.addemployee.and.returnValue(of([]))
    
     await TestBed.configureTestingModule({  
    declarations: [ DialogEmpComponent],
 
      imports: [HttpClientTestingModule,
                ReactiveFormsModule,
                RouterTestingModule,
                BrowserAnimationsModule,
                MatButtonModule,
                MatIconModule,
                MatDialogModule,
                MatFormFieldModule,
                MatInputModule,
                MatRadioModule,
                MatSelectModule,

                ],
    providers: [ 
       EmployeServService,
       MatDialog, 
       MatDialogRef,
        {provide: MatDialogRef, useValue: {}},
        {provide : MAT_DIALOG_DATA, val : {}}
     ],      
    })

    .compileComponents();
    fixture= TestBed.createComponent(DialogEmpComponent);
    component=fixture.componentInstance;
    
     });

     it('check the form controls inside a form group', ()=> {
        fixture.detectChanges();
        fixture.whenStable().then(()=>{
            const fullName: HTMLInputElement=fixture.debugElement.nativeElement.querySelector('#fullName');
            const mobile: HTMLInputElement= fixture.debugElement.nativeElement.querySelector('#mobile');

            fullName.value='Rabeb Ali',
            mobile.value= '21457896',

            fullName.dispatchEvent(new Event('input'));
            mobile.dispatchEvent(new Event('input'));


            fixture.detectChanges();
            fixture.whenStable().then(()=>{
                expect(component.employeeForm.value).toEqual({
                    fullName: 'Rabeb Ali',
                    mobile: '21457896'
                })
            })

        })
     })


  });

 



  

