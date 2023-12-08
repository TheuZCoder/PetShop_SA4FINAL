import { Component } from '@angular/core';
import { Cliente } from 'src/app/modelo/cliente.model';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-login-cadastro',
  templateUrl: './login-cadastro.component.html',
  styleUrls: ['./login-cadastro.component.css']
})
export class LoginCadastroComponent {
  constructor(private clienteService: ClienteService) {}

  novoCliente: Cliente = { nome: '', email: '', senha: '' };

  cadastrar(): void {
    this.clienteService.cadastrarCliente(this.novoCliente).subscribe(response => {
      console.log('Cadastro realizado com sucesso', response);
    });
  }


  login(): void {
    const email = '';
    const senha = '';
    
    this.clienteService.fazerLogin(email, senha).subscribe(response => {
      if (response.length > 0) {
        console.log('Login bem-sucedido'+ email + senha);
      } else {
        console.log('Credenciais inválidas');
      }
    });
  }
}
