import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrendatarioEliminarComponent } from './arrendatario-eliminar.component';

describe('ArrendatarioEliminarComponent', () => {
  let component: ArrendatarioEliminarComponent;
  let fixture: ComponentFixture<ArrendatarioEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrendatarioEliminarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrendatarioEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
