import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCadastroComponent } from './login-cadastro.component';

describe('LoginCadastroComponent', () => {
  let component: LoginCadastroComponent;
  let fixture: ComponentFixture<LoginCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginCadastroComponent]
    });
    fixture = TestBed.createComponent(LoginCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
