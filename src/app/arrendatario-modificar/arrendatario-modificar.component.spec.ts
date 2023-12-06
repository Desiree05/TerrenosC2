import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrendatarioModificarComponent } from './arrendatario-modificar.component';

describe('ArrendatarioModificarComponent', () => {
  let component: ArrendatarioModificarComponent;
  let fixture: ComponentFixture<ArrendatarioModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrendatarioModificarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrendatarioModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
