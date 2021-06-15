import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  selected: number = 1;
  cliente: any;

  constructor() { }

  ngOnInit(): void {}

  selecionarMenu(opcao: number): void {
    this.selected = opcao;
  }

  getCliente(data) {
    this.cliente = data;
    this.selecionarMenu(2);
  }

}
