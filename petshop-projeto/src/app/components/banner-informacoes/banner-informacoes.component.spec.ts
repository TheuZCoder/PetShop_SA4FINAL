import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerInformacoesComponent } from './banner-informacoes.component';

describe('BannerInformacoesComponent', () => {
  let component: BannerInformacoesComponent;
  let fixture: ComponentFixture<BannerInformacoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerInformacoesComponent]
    });
    fixture = TestBed.createComponent(BannerInformacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
