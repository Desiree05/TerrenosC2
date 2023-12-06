import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrenoCrearComponent } from './terreno-crear.component';

describe('TerrenoCrearComponent', () => {
  let component: TerrenoCrearComponent;
  let fixture: ComponentFixture<TerrenoCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerrenoCrearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerrenoCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
