import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagensComponent } from './personagens.component';

describe('PersonagensComponent', () => {
  let component: PersonagensComponent;
  let fixture: ComponentFixture<PersonagensComponent>;

  /*beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonagensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });*/

  it('deve mostrar o titulo na tag h1', () => {
    const fixture = TestBed.createComponent(PersonagensComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Personagens');
  });


});
