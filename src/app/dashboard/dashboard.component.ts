import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';
import { DashboardServiceService } from '../services/dashboard/dashboard-service.service' ;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 
  @ViewChild(MatPaginator) paginator !: MatPaginator;



  constructor(private dashboardService : DashboardServiceService) { }

  ngOnInit(){
   
  }

}
