import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalDetalheComponent } from './local-detalhe.component';

describe('LocalDetalheComponent', () => {
  let component: LocalDetalheComponent;
  let fixture: ComponentFixture<LocalDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
