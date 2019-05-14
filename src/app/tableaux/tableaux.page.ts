import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableaux',
  templateUrl: './tableaux.page.html',
  styleUrls: ['./tableaux.page.scss'],
})


export class TableauxPage implements OnInit {
 // création d'un tableau
 private monthList: Array<string> = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];



  constructor() { }

  ngOnInit() {
  }

}
