import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelaVerComponent } from './parcela-ver.component';

describe('ParcelaVerComponent', () => {
  let component: ParcelaVerComponent;
  let fixture: ComponentFixture<ParcelaVerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParcelaVerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParcelaVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
