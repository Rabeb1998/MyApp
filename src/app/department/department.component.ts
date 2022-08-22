import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DialogDepComponent } from './dialog-dep/dialog-dep.component';
import { MatDialog } from '@angular/material/dialog';
import {DepServService} from '../services/department/dep-serv.service';
import { FormBuilder} from '@angular/forms';
import { activity } from '../models/activity.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DepartmentComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;
  expandedElement: any;
  detailscolumns: string[] = ['Employee_Name', 'Description2', 'email', 'job_position', 'work_sought'];
  displayedColumns: string[] = ['title', 'department', 'description'];
  @ViewChild('addActivityButton') addActivityButton: any;
  @ViewChild(MatSort) sort!: MatSort
  @ViewChild(MatPaginator) paginator !: MatPaginator;

  
  constructor(private dialog : MatDialog, private dep: DepServService , private formBuilder: FormBuilder) { 
 
    
  }

  ngOnInit(): void {
    this.getAllActivity();
    
    }
    

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  

  openDialog() {
    this.dialog.open(DialogDepComponent,{
     width: '50%'
    }).afterClosed().subscribe(val=>{
      if(val ==='save'){
        this.getAllActivity();
      }
    });
 
 }

 getAllActivity(){
  this.dep.getDepartment()
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

  editActivity(element: any){
    this.dialog.open(DialogDepComponent,{
    width:'30%',
    data:element
  }).afterClosed().subscribe(val=>{
    if(val==='Update'){
      this.getAllActivity();
    }
  })
  }
  deleteActivity(id:number){
    this.dep.deleteDep(id)
    .subscribe({
      next:(res)=>{
        alert("Activity Deleted Successfully")
          this.getAllActivity();   
      },
      error:()=>{
        alert("Error While deleting !!")
      }
    })
  }
  expandCollapse(row:any) {
    if (row.isExpanded) {
      row.isExpanded = false;
    } else {
      row.isExpanded = true;
    }
  }
  toggleRow(element: { expanded: boolean; }) {
    // Uncommnet to open only single row at once
    // ELEMENT_DATA.forEach(row => {
    //   row.expanded = false;
    // })
    element.expanded = !element.expanded
  }

}

  

