import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app' , () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have as title UI' , () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('UI');
  });

  xit(`should render title `, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-sidenav').textContent).toContain('UI app is running!');
  });
 
  
});

//  //  smoke test
//  describe('AppModule', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//     });
//   });

//   it('initializes', () => {
//     const module = TestBed.inject(AppModule);
//     expect(module).toBeTruthy();
//   });
// });
