import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesoresListaComponent } from './profesores-lista.component';

describe('ProfesoresListaComponent', () => {
  let component: ProfesoresListaComponent;
  let fixture: ComponentFixture<ProfesoresListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfesoresListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfesoresListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
