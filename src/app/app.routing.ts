import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponent } from './components/clients/create/create.component';
import { ReadComponent } from './components/clients/read/read.component';
import { HomeComponent } from './components/home/home.component';


const APP_ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'read', component: ReadComponent},
    {path: 'create', component: CreateComponent}
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);