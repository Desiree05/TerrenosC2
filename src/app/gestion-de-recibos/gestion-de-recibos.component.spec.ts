import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDeRecibosComponent } from './gestion-de-recibos.component';

describe('GestionDeRecibosComponent', () => {
  let component: GestionDeRecibosComponent;
  let fixture: ComponentFixture<GestionDeRecibosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDeRecibosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionDeRecibosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
