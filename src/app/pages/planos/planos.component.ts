import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface IPlano {
  nome: string;
  mensalidade: number;
}

@Component({
  selector: 'app-planos',
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.scss']
})
export class PlanosComponent implements OnInit {
  planos: Array<IPlano>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPlanos();
  }

  getPlanos(): void {
    this.get().subscribe(response => {
      this.planos = response.data;
    });
  }

  private get() {
    return this.http.get<any>('http://localhost:8000/api/planos')
  }
}
