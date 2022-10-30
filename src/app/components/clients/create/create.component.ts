import { ClientService } from './../../../services/client.service';
import { Client } from './../../../interfaces/client.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  client: Client = {
    name: '',
    birthDate: '',
    cpf: '',
    income: 0,
    children: 0
  }

  constructor(
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  create(): void {
    this.clientService.create(this.client).subscribe(response => {
      this.router.navigate(['/read']);
    });
  }

  clean(): void {
    this.client.name = '';
    this.client.cpf = '';
    this.client.birthDate = '';
    this.client.income = 0;
    this.client.children = 0;
  }

}
