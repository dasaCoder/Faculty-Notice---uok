import { Component, OnInit } from '@angular/core';
//import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-dep-list',
  templateUrl: './dep-list.component.html',
  styleUrls: ['./dep-list.component.scss']
})
export class DepListComponent implements OnInit {

  departments = [];

  constructor() { 
    //console.log("deplist", navParms.get('dep'));
    //dep = navParms;
    this.departments = [
      {
        'id': 1,
        'name': 'Department of art'
      },
      {
        'id': 2,
        'name': 'Department of fashion'
      },
      {
        'id': 3,
        'name': 'Department of test'
      }
      
    ]
  }

  ngOnInit() {
    console.log("deplist oninit");
  }

}
