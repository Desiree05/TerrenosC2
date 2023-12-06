import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrenoEliminarComponent } from './terreno-eliminar.component';

describe('TerrenoEliminarComponent', () => {
  let component: TerrenoEliminarComponent;
  let fixture: ComponentFixture<TerrenoEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerrenoEliminarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerrenoEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
