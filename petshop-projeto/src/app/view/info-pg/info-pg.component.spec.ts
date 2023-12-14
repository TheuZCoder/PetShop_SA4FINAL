import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPgComponent } from './info-pg.component';

describe('InfoPgComponent', () => {
  let component: InfoPgComponent;
  let fixture: ComponentFixture<InfoPgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoPgComponent]
    });
    fixture = TestBed.createComponent(InfoPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
