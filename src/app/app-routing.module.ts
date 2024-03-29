import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AccueilComponent } from './application/accueil/accueil.component';
import { ContactComponent } from './application/contact/contact.component';
import { ProduitsComponent } from './application/produits/produits.component';
import { ErrorComponent } from './application/error/error.component';
import { ProduitComponent } from './application/produit/produit.component';
import { AjouterproduitComponent } from './application/ajouterproduit/ajouterproduit.component';
import { RechComponent } from './application/rech/rech.component';



const routes: Routes = [
  {path:'accueil', component:AccueilComponent},
  {path:'contact', component:ContactComponent}, 
  {path:'error', component:ErrorComponent},   
  {path:'rech', component:RechComponent},  
  {path:'produits', component:ProduitsComponent},
  {path:'ajouterproduit', component:AjouterproduitComponent},
  //{path:'produits/:id', component:ProduitComponent},
  {path: 'produits/:id/:libelle/:lib/:prix' , component:ProduitComponent},
  {path:'', redirectTo:'accueil', pathMatch:'full'},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
