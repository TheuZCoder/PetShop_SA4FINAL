import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPetshopComponent } from './info-petshop.component';

describe('InfoPetshopComponent', () => {
  let component: InfoPetshopComponent;
  let fixture: ComponentFixture<InfoPetshopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoPetshopComponent]
    });
    fixture = TestBed.createComponent(InfoPetshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
