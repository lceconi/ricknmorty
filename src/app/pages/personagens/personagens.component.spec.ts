import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagensComponent } from './personagens.component';
import { CardPersonagemComponentModule } from 'src/app/components/card-personagem/card-personagem.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('PersonagensComponent', () => {
  let component: PersonagensComponent;
  let fixture: ComponentFixture<PersonagensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonagensComponent ],
      imports: [ CardPersonagemComponentModule, HttpClientModule, RouterTestingModule ]
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
  });

  it('deve mostrar o titulo na tag h1', () => {
    const fixture = TestBed.createComponent(PersonagensComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Personagens');
  });

  // Não está funcionando
  // it('filtro deve retornar um personagem', () => {
  //   const fixture = TestBed.createComponent(PersonagensComponent);
  //   fixture.detectChanges();
  //   fixture.componentInstance.carregarPersonagens();
  //   let event = {
  //     target: {
  //       value: 'Morty Smith'
  //     }
  //   }
  //   const compiled = fixture.componentInstance.pesquisarPersonagem(event);
  //   expect(compiled[0].name).toContain(event.target.value);
  // });
});
