import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dep-list',
  templateUrl: './dep-list.component.html',
  styleUrls: ['./dep-list.component.scss']
})
export class DepListComponent implements OnInit {

  constructor() { 
    console.log("deplist");
  }

  ngOnInit() {
    console.log("deplist oninit");
  }

}
