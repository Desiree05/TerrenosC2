import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrenoModificarComponent } from './terreno-modificar.component';

describe('TerrenoModificarComponent', () => {
  let component: TerrenoModificarComponent;
  let fixture: ComponentFixture<TerrenoModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerrenoModificarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerrenoModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
