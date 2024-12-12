import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarPlantillasComponent } from './administrar-plantillas.component';

describe('AdministrarPlantillasComponent', () => {
  let component: AdministrarPlantillasComponent;
  let fixture: ComponentFixture<AdministrarPlantillasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrarPlantillasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrarPlantillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
