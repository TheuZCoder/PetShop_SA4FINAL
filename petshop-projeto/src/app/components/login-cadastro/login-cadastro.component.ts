import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/modelo/cliente.model';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-login-cadastro',
  templateUrl: './login-cadastro.component.html',
  styleUrls: ['./login-cadastro.component.css']
})
export class LoginCadastroComponent {
  constructor(private clienteService: ClienteService, private router: Router) {}

  novoCliente: Cliente = { nome: '', email: '', senha: '' };

  cadastrar(): void {
    this.clienteService.cadastrarCliente(this.novoCliente).subscribe(response => {
      console.log('Cadastro realizado com sucesso', response);
      this.router.navigate(['']);
    });
  }

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  login(): void {
    this.clienteService.loginUser(this.username, this.password)
      .subscribe((isAuthenticated: boolean) => {
        if (isAuthenticated) {
          // Redirecione para a página principal
          this.router.navigate(['']);
        } else {
          // Exiba uma mensagem de erro personalizada
          this.errorMessage = 'Credenciais inválidas. Por favor, verifique seu usuário e senha.';
        }
      });
  }
}
