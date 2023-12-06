import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrendatarioVerComponent } from './arrendatario-ver.component';

describe('ArrendatarioVerComponent', () => {
  let component: ArrendatarioVerComponent;
  let fixture: ComponentFixture<ArrendatarioVerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrendatarioVerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrendatarioVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
