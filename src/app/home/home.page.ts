import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DepListComponent } from '../dep-list/dep-list.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items = [];
  constructor( public nav: NavController) {

    this.items = [
      {
        'id': 1,
        'name': 'Faculty of Commerce and Management'
      },
      {
        'id': 2,
        'name': 'Faculty of Graduate Studies'
      },
      {
        'id': 3,
        'name': 'Faculty of Humanities'
      },
      {
        'id': 4,
        'name': 'Faculty of Science'
      },
      {
        'id': 5,
        'name': 'Faculty of Social Sciences'
      }
      
    ];


  }

  openNavDetailsPage(item) {
    console.log("nav");
    this.nav.navigateForward('/department');
  }
}
