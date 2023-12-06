import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrendatarioCrearComponent } from './arrendatario-crear.component';

describe('ArrendatarioCrearComponent', () => {
  let component: ArrendatarioCrearComponent;
  let fixture: ComponentFixture<ArrendatarioCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrendatarioCrearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrendatarioCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
