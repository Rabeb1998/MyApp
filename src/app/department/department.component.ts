import { Component, OnInit } from '@angular/core';
import { DialogDepComponent } from './dialog-dep/dialog-dep.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  constructor(private dialog : MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(DialogDepComponent,{
     width: '50%'
    });
 
   
 
 }

}
