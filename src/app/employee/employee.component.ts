import { Component, OnInit } from '@angular/core';
import { EmployeServService } from '../services/employee/employe-serv.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ViewChild} from '@angular/core';
import { DialogEmpComponent } from './dialog-emp/dialog-emp.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  displayedColumns: string[] = ['fullName', 'email', 'mobile', 'city', 'gender','department','Date','isPermanent', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort
  constructor(public dialog : MatDialog, private emp : EmployeServService) { }

  ngOnInit(): void {
    this.getAllemployee();
  }
  openDialog() {
    this.dialog.open(DialogEmpComponent,{
     width: '50%'
    }).afterClosed().subscribe(val=>{
      if(val ==='save'){
        this.getAllemployee();
      }
    });
 
   
 
 }
  applyFilter(e: Event) {
    const filterValue = (e.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
getAllemployee(){
this.emp.fetchEmployee()
.subscribe({
  next:(res)=>{
    this.dataSource=new MatTableDataSource(res);
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort
    
  },
  error:(err)=>{
    alert("error !!")
  }
})
}

editEmployee(row: any){
  this.dialog.open(DialogEmpComponent,{
  width:'30%',
  data:row
}).afterClosed().subscribe(val=>{
  if(val==='Update'){
    this.getAllemployee();
  }
})
}

deleteEmployee(id:number){
  this.emp.deleteEmployee(id)
  .subscribe({
    next:(res)=>{
      alert("Employee Deleted Successfully")
        this.getAllemployee();   
    },
    error:()=>{
      alert("Error While deleting !!")
    }
  })
}

}
