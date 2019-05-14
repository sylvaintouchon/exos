import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clic',
  templateUrl: './clic.page.html',
  styleUrls: ['./clic.page.scss'],
})
export class ClicPage implements OnInit {

  private firstName: string = "Sylvain";

  constructor() { }

  ngOnInit() {
  }

changeName(){
  this.firstName="Joel";


}

}
