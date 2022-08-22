import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DepServService } from '../../services/department/dep-serv.service';

@Component({
  selector: 'app-dialog-dep',
  templateUrl: './dialog-dep.component.html',
  styleUrls: ['./dialog-dep.component.scss']
})
export class DialogDepComponent implements OnInit {
  public departmentForm!: FormGroup;
  actionBtn : string ="Save"

  constructor(private formBuilder: FormBuilder, private dep:DepServService, public dialog:MatDialogRef<DialogDepComponent>,
    @Inject(MAT_DIALOG_DATA) public editData:any) { }

  ngOnInit(): void {
    this.departmentForm =this.formBuilder.group({
      title : this.formBuilder.control(''),
      department :['', Validators.required],
      description: ['', Validators.required],
      item: this.formBuilder.array([this.initItem()])
    });

    if (this.editData){
      this.actionBtn="Update";
      this.departmentForm.controls['title'].setValue(this.editData.title);
      this.departmentForm.controls['department'].setValue(this.editData.department);
      this.departmentForm.controls['description'].setValue(this.editData.description);
      this.departmentForm.controls['item'].setValue(this.editData.item);
     
  
  
    }
  }
  get formArr(){
    return this.departmentForm.get('item') as FormArray;
  }

  get f(){
    return this.departmentForm.controls;
  }
  initItem(){
    return this.formBuilder.group({
      Employee_Name : [''],
      Description2: [''],
      email: [''],
      job_position: [''],
      work_sought: [''],
      action: [''],
    });
  }
  addDep(){
    if(!this.editData){

    this.dep.postDepartment(this.departmentForm.value)
    .subscribe({
      next:()=>{
        alert("Department Added Successfully");
        this.departmentForm.reset();
      this.dialog.close('save');
    
      },
      error: ()=>{
        alert("Error While Adding !!")
      }
    });
  }else {
    this.updateDep()
   }
    
  }


addNew(){
  this.formArr.push(this.initItem());
}

delete( index:number){
this.formArr.removeAt(index);
}
 OnSubmit(){
  console.log(this.departmentForm);
 
 }

 updateDep(){
  this.dep.putDep(this.departmentForm.value,this.editData.id)
  .subscribe({
    next:(res)=>{
      alert("Activity Update Successfully");
      this.departmentForm.reset();
      this.dialog.close('Update');
    },
    error:()=>{
      alert("Error while Updating");
    }
  })
}

 


}
