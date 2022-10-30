import { Client } from './../../../interfaces/client.model';
import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  clients: Client[] = [];

  page: number = 1;
  total!: number;
  itemsPerPage!: number;
  
  constructor(private clientService: ClientService)  {} 

  ngOnInit(): void {
    this.readAll(this.page); 
  }

  readAll(page: number): void {
        this.clientService.readAll(page-1).subscribe(response => {
        this.total = response.totalElements;
        this.itemsPerPage = response.size;
        this.clients = response.content;
    });
  }

}
