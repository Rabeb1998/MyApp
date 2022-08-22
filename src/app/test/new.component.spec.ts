import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { NewComponent } from '../helps/new/new.component';

describe('NewComponent', () => {
  let component: NewComponent;
  let fixture: ComponentFixture<NewComponent>;
  let fb : FormBuilder;
  beforeEach((async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewComponent ],
      imports: [
        FormBuilder,
        ReactiveFormsModule,
        FormGroup,
        AppRoutingModule,
        FormsModule,
      ],
      providers:[],
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(NewComponent);
      component = fixture.componentInstance;
    });
  }));
it('should call add method', fakeAsync(()=>{
  const testform={
    title: 'test',
    name: 'testName',
    text: 'TestForm'
  };
 component.newForm.controls['title'].setValue(testform.title);
 component.newForm.controls['name'].setValue(testform.name);
 component.newForm.controls['text'].setValue(testform.text);

 expect(component.add).toEqual(testform);

}))
  
});
