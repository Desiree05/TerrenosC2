import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrenosComponent } from './terrenos.component';

describe('TerrenosComponent', () => {
  let component: TerrenosComponent;
  let fixture: ComponentFixture<TerrenosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerrenosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerrenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
