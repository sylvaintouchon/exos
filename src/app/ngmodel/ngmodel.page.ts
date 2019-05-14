import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngmodel',
  templateUrl: './ngmodel.page.html',
  styleUrls: ['./ngmodel.page.scss'],
})
export class NgmodelPage implements OnInit {


    name = "Sylvain";
    

  constructor() { }

  ngOnInit() {
  }

}
