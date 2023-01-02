import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { TitleComponent } from './components/title/title.component';
import { CardComponent } from './components/card/card.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { HomeComponent } from './pages/home/home.component';
import { QuemsomosComponent } from './pages/content/quemsomos/quemsomos.component';
import { VendaComponent } from './pages/content/venda/venda.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TitleComponent,
    CardComponent,
    RodapeComponent,
    HomeComponent,
    QuemsomosComponent,
    VendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
