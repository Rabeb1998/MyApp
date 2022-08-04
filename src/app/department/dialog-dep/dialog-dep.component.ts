import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DepServService } from '../dep-serv.service';
@Component({
  selector: 'app-dialog-dep',
  templateUrl: './dialog-dep.component.html',
  styleUrls: ['./dialog-dep.component.scss']
})
export class DialogDepComponent implements OnInit {
   departmentForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private dep:DepServService) { }

  ngOnInit(): void {
    this.departmentForm=this.formBuilder.group({
      Domain : ['', Validators.required],
      Department :['', Validators.required],
      TeamID: ['', Validators.required],
      Role: ['', Validators.required]
    })
  }
  addDep(){
    this.dep.postDepartment(this.departmentForm.value)
    .subscribe({
      next:()=>{
        alert("Department Added Successfully")
      },
      error: ()=>{
        alert("Error While Adding !!")
      }
    });
    
  }

 

}
