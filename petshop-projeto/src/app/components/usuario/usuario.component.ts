import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/modelo/cliente.model';
import { ClienteService } from 'src/app/service/cliente.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit{
  cliente: Cliente = { nome: '', email: '', senha: '' };

  constructor(private route: ActivatedRoute, private clienteService: ClienteService) {}

  ngOnInit(): void {
    const clienteId = this.route.snapshot.paramMap.get('id');

    // Verifica se clienteId não é nulo antes de chamar o serviço
    if (clienteId !== null) {
      this.clienteService.getClienteById(clienteId).subscribe(
        data => this.cliente = data,
        error => console.error('Erro ao obter cliente por ID:', error)
      );
    }
  }

  salvarAlteracoes(): void {
    // Verifica se cliente.id não é nulo ou undefined antes de chamar o serviço
    if (this.cliente.id !== null && this.cliente.id !== undefined) {
      // Converte this.cliente.id para string, pois o serviço espera um parâmetro string
      const idString: string = this.cliente.id.toString();

      this.clienteService.updateCliente(idString, this.cliente).subscribe(
        data => console.log('Cliente atualizado com sucesso:', data),
        error => console.error('Erro ao atualizar cliente:', error)
      );
    }
  }
}
