import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

// Rutas
import { app_routing } from './app.routes';

// Servicios
import { InformacionService } from './services/informacion.service';


// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { ItemComponent } from './components/item/item.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortfolioComponent,
    AboutComponent,
    ItemComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpModule
  ],
  providers: [
    InformacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
