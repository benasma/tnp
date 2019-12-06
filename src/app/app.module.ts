import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './application/accueil/accueil.component';
import { ContactComponent } from './application/contact/contact.component';
import { ErrorComponent } from './application/error/error.component';
import { MenuComponent } from './application/menu/menu.component';
import { ProduitComponent } from './application/produit/produit.component';
import { ProduitsComponent } from './application/produits/produits.component';
import { AjouterproduitComponent } from './application/ajouterproduit/ajouterproduit.component';

import { AlertModule, ButtonsModule } from 'ngx-bootstrap';
import { RechComponent } from './application/rech/rech.component';
import { RechchPipe } from './rechch.pipe';
import { OrderModule } from 'ngx-order-pipe';
import { DinarPipe } from './dinar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ContactComponent,
    ErrorComponent,
    MenuComponent,
    ProduitComponent,
    ProduitsComponent,
   
    AjouterproduitComponent,
   
    RechComponent,
   
    RechchPipe,
   
    DinarPipe,
    
  ],
  imports: [
    OrderModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
