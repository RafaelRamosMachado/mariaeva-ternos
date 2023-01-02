import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuemsomosComponent } from './pages/content/quemsomos/quemsomos.component';
import { VendaComponent } from './pages/content/venda/venda.component';

const routes: Routes = [
  { path:'',
    component: HomeComponent,
  },
  {
    path:'quemsomos',
    component: QuemsomosComponent,
  },
  {
    path:'vendas/:id',
    component: VendaComponent,
  },
  {
    path:'vendas/:id/quemsomos',
    component: QuemsomosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
