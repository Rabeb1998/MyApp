import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeServService } from '../employe-serv.service';
@Component({
  selector: 'app-dialog-emp',
  templateUrl: './dialog-emp.component.html',
  styleUrls: ['./dialog-emp.component.scss']
})
export class DialogEmpComponent implements OnInit {
genderList=["Male", "Female", "Other"];
 employeeForm!: FormGroup;
actionBtn : string ="Save"
 
 constructor(private formBuilder:FormBuilder,
  @Inject(MAT_DIALOG_DATA) public editData: any ,
  private emp: EmployeServService,
   private dialogRef: MatDialogRef<DialogEmpComponent>) { }

 ngOnInit(): void {
  this.employeeForm=this.formBuilder.group({
    fullName: ['',Validators.required],
    email: ['', Validators.required],
    mobile: ['', Validators.required],
    city: ['', Validators.required],
    gender: ['', Validators.required],
    department:['', Validators.required],
    Date:['',Validators.required],
    isPermanent:['', Validators.required]

  });
  if (this.editData){
    this.actionBtn="Update";
    this.employeeForm.controls['fullName'].setValue(this.editData.fullName);
    this.employeeForm.controls['email'].setValue(this.editData.email);
    this.employeeForm.controls['mobile'].setValue(this.editData.mobile);
    this.employeeForm.controls['city'].setValue(this.editData.city);
    this.employeeForm.controls['gender'].setValue(this.editData.gender);
    this.employeeForm.controls['department'].setValue(this.editData.department);
    this.employeeForm.controls['Date'].setValue(this.editData.Date);


  }
  
}
addemployee(){
   if(!this.editData){

  this.emp.postEmployee(this.employeeForm.value)
  .subscribe({
    next:()=>{
      alert("Employee Added Successfully");
      this.employeeForm.reset();
      this.dialogRef.close('save');
    },
    error: ()=>{
      alert("Error While Adding !!")
    }
  });

   }else {
    this.updateEmployee()
   }
  
}
updateEmployee(){
  this.emp.putEmployee(this.employeeForm.value,this.editData.id)
  .subscribe({
    next:(res)=>{
      alert("Employee Update Successfully");
      this.employeeForm.reset();
      this.dialogRef.close('Update');
    },
    error:()=>{
      alert("Error while Updating");
    }
  })
}

}


