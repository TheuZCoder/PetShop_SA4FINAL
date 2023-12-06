import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgServicoComponent } from './pg-servico.component';

describe('PgServicoComponent', () => {
  let component: PgServicoComponent;
  let fixture: ComponentFixture<PgServicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PgServicoComponent]
    });
    fixture = TestBed.createComponent(PgServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
