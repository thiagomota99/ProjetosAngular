import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesCursosComponent } from './detalhes-cursos.component';

describe('DetalhesCursosComponent', () => {
  let component: DetalhesCursosComponent;
  let fixture: ComponentFixture<DetalhesCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesCursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
