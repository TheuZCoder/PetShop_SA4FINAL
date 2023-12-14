import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegraViewComponent } from './regra-view.component';

describe('RegraViewComponent', () => {
  let component: RegraViewComponent;
  let fixture: ComponentFixture<RegraViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegraViewComponent]
    });
    fixture = TestBed.createComponent(RegraViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
