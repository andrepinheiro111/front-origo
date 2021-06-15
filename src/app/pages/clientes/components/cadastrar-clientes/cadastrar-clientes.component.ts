import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-clientes',
  templateUrl: './cadastrar-clientes.component.html',
  styleUrls: ['./cadastrar-clientes.component.scss']
})
export class CadastrarClientesComponent implements OnInit {
  @Input() cliente: any;
  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.createForm();

    (!!this.cliente)
      ? this.form.patchValue(this.cliente)
      : this.form.reset();
  }

  submit(): void {
    !!this.cliente
      ? this.update(this.form.value).subscribe(() => {
        alert('Usuario Atualizado com sucesso');
      })
      : this.save(this.form.value).subscribe(() => {
        alert('Usuário criado com sucesso');
      });
  }

  private createForm(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      nascimento: ['', Validators.required],
    })
  }

  private save(data: any) {
    return this.http.post<any>('http://localhost:8000/clientes', data);
  }

  private update(data: any) {
    return this.http.put<any>(`http://localhost:8000/clientes/${this.cliente.id}`, data);
  }

}
