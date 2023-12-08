import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaleConoscoComponent } from './fale-conosco.component';

describe('FaleConoscoComponent', () => {
  let component: FaleConoscoComponent;
  let fixture: ComponentFixture<FaleConoscoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaleConoscoComponent]
    });
    fixture = TestBed.createComponent(FaleConoscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
