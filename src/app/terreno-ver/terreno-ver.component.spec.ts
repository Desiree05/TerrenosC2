import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrenoVerComponent } from './terreno-ver.component';

describe('TerrenoVerComponent', () => {
  let component: TerrenoVerComponent;
  let fixture: ComponentFixture<TerrenoVerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerrenoVerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerrenoVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
