import { MatDialog } from "@angular/material/dialog";
import { of } from "rxjs";
import { EmployeeComponent } from "./employee.component";

describe('EmployeeComponent', ()=>{
   let component: EmployeeComponent;
   let DisplayedColumns;
   let emp;
   let dialog: MatDialog;

    beforeEach(function() {
      
        DisplayedColumns= [
            {fullName:'fullName', emeil: 'email', mobile: 'mobile', city: 'city', gender: 'gender', department:'department', Date:'Date',isPermanent:'isPermanent', action:'action'},       
        ];
        emp=jasmine.createSpyObj(['openDialog','getAllemployee', 'editEmployee', 'deleteEmployee']);
        component= new EmployeeComponent(dialog,emp);


    });

    it('should edit the employee from table ', ()=>{
    });

});

