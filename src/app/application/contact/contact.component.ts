import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  nb:number =2;
  onAccueil()
  {
    this.router.navigate(['/accueil']);
  }
  msg(){
    alert("merci d'envoyer votre message");
  }

}
