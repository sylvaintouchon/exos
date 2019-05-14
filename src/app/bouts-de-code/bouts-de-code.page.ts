import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bouts-de-code',
  templateUrl: './bouts-de-code.page.html',
  styleUrls: ['./bouts-de-code.page.scss'],
})
export class BoutsDeCodePage implements OnInit {

  private prenom: string = "Joel";

  private person: Object = {
    name: "Christophe",
    adress: "5 rue de Polivot",
    cp: "Paris"


  };


  constructor() { }

  ngOnInit() {
  }

}
