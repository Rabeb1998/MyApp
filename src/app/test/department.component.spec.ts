 import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

 import { DepartmentComponent } from '../department/department.component';
import { DepServService } from '../services/department/dep-serv.service';



export class MatDialogMock {
  // When the component calls openDialog we'll return an object
  open() {
    return {
      afterClosed: () => of({action: true})
    };
  }
}
 describe('DepartmentComponent', () => {
   let component: DepartmentComponent;
   let fixture: ComponentFixture<DepartmentComponent>;

   beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule, 
        BrowserAnimationsModule, 
        ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [
        DepartmentComponent
      ],
      providers :[
        DepServService,
        {provide: MatDialog, useClass: MatDialogMock}
       
      ]
     })
     .compileComponents();

     fixture = TestBed.createComponent(DepartmentComponent);
     component = fixture.componentInstance;
     component.ngOnInit();
     fixture.whenStable();
    fixture.detectChanges();
   });

   it('should call ngOnInit', () => {
    let spy_getAllActivity=spyOn(component,"getAllActivity").and.returnValue();
    component.ngOnInit();
    expect(component.getAllActivity);
  });

it('should set the dataSource filter to the provided argument', () => {
  const filterValue = new Event('click');  
  spyOn(component, 'applyFilter');
  component.applyFilter(filterValue);
  expect(component.applyFilter);
    
  })
   it('should create', () => {
    expect(component).toBeTruthy();
   });
 });
