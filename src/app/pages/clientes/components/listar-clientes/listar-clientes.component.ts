import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.scss']
})
export class ListarClientesComponent implements OnInit {
  clientes: any;
  @Output() listarEmitter = new EventEmitter();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.buscar();
  }

  deletar(clienteId: number): void {
    this.destroyCliente(clienteId).subscribe(response => {
      alert('Cliente deletado com sucesso');
      this.buscar();
    });
  }

  editar(cliente: any): void {
    this.listarEmitter.emit(cliente);
  }

  private buscar(): void {
    this.getClientes().subscribe(response => {
      this.clientes = response.data;
    })
  }

  private getClientes() {
    return this.http.get<any>('http://localhost:8000/api/clientes');
  }

  private destroyCliente(clienteId: number) {
    return this.http.delete<any>(`http://localhost:8000/api/clientes/${clienteId}`);
  }

}
