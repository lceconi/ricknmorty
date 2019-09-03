import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaisComponent } from './locais.component';
import { TableComponentModule } from 'src/app/components/table/table.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from 'src/app/services/api.service';

describe('LocaisComponent', () => {
  let component: LocaisComponent;
  let fixture: ComponentFixture<LocaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocaisComponent ], 
      imports: [ TableComponentModule, HttpClientModule, RouterTestingModule ],
      providers: [ ApiService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve mostrar o titulo na tag h1', () => {
    const fixture = TestBed.createComponent(LocaisComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Locais');
  });
});
