import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { CreateComponent } from './components/clients/create/create.component';
import { ReadComponent } from './components/clients/read/read.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ClientService } from './services/client.service';


@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    PaginationModule,
    BsDropdownModule,
    routing
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
