import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';
import { DashboardServiceService } from '../services/dashboard/dashboard-service.service' ;
import { card } from '../models/card';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild(MatPaginator) paginator !: MatPaginator;
 
   cards!:any;
   isImage!: boolean;
   imgUrl: string = '';

  constructor(private dashboardService : DashboardServiceService) { }
  
  ngOnInit(){ }

  Image(image: Blob){
    let reader = new FileReader();
    reader.addEventListener("load", ()=>{
      this.cards=reader.result;
    }, false);
    if (image){
      reader.readAsDataURL(image);
    }
  }
getImage(){
  this.isImage= true;
  this.dashboardService.getImg(this.imgUrl).subscribe(data=>{
    this.Image(data);
    this.isImage=false;
  },
  error=>{
    this.isImage=false;
    console.log(error);
    
  })
}
 
}
