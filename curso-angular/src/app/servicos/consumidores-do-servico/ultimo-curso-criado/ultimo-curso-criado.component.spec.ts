import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimoCursoCriadoComponent } from './ultimo-curso-criado.component';

describe('UltimoCursoCriadoComponent', () => {
  let component: UltimoCursoCriadoComponent;
  let fixture: ComponentFixture<UltimoCursoCriadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltimoCursoCriadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimoCursoCriadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
