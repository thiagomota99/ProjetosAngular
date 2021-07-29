import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgswitchCaseComponent } from './ngswitch-case.component';

describe('NgswitchCaseComponent', () => {
  let component: NgswitchCaseComponent;
  let fixture: ComponentFixture<NgswitchCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgswitchCaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgswitchCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
