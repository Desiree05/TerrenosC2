import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelaEliminarComponent } from './parcela-eliminar.component';

describe('ParcelaEliminarComponent', () => {
  let component: ParcelaEliminarComponent;
  let fixture: ComponentFixture<ParcelaEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParcelaEliminarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParcelaEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
