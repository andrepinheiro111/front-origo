import { ClientesRoutes } from './clientes.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes.component';
import { RouterModule } from '@angular/router';
import { ListarClientesComponent } from './components/listar-clientes/listar-clientes.component';
import { CadastrarClientesComponent } from './components/cadastrar-clientes/cadastrar-clientes.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ClientesComponent,
    ListarClientesComponent,
    CadastrarClientesComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(ClientesRoutes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class ClientesModule { }
