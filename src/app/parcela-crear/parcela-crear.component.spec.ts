import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelaCrearComponent } from './parcela-crear.component';

describe('ParcelaCrearComponent', () => {
  let component: ParcelaCrearComponent;
  let fixture: ComponentFixture<ParcelaCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParcelaCrearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParcelaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
