import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsDataComponent } from './components/clients-data/clients-data.component';


const routes: Routes = [
  {
    path: 'clients-list',
    component: ClientsDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
