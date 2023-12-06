import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelaModificarComponent } from './parcela-modificar.component';

describe('ParcelaModificarComponent', () => {
  let component: ParcelaModificarComponent;
  let fixture: ComponentFixture<ParcelaModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParcelaModificarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParcelaModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
