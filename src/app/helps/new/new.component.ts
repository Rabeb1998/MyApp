import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { reclamation } from 'src/app/models/reclamation';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  newForm: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.newForm=this.fb.group({
      title: ['', Validators.required],
      name: ['', Validators.required],
      text: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }
  add(){
    console.log(this.newForm);
    const newf : reclamation= {
      title: this.newForm.get('title')?.value,
      name: this.newForm.get('name')?.value,
      text: this.newForm.get('text')?.value,
      date_reclamation: new Date


    }
    console.log(newf);
    
    
  }

}
