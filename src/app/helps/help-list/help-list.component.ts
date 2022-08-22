import { Component, OnInit } from '@angular/core';
import { reclamation } from 'src/app/models/reclamation';

@Component({
  selector: 'app-help-list',
  templateUrl: './help-list.component.html',
  styleUrls: ['./help-list.component.scss']
})
export class HelpListComponent implements OnInit {
  listHelps:reclamation[]=[
    {title:'Actia', name:'Ahmed', text:'AAAA', date_reclamation: new Date()},
    {title:'Actia2', name:'Ahmed2', text:'BBBB', date_reclamation: new Date()}
 
  ] 
  constructor() { }

  ngOnInit(): void {
  }

}
