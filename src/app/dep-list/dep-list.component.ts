import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DepartmentComponent } from '../department/department.component';
import { HTTP } from '@ionic-native/http/ngx';

//import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-dep-list',
  templateUrl: './dep-list.component.html',
  styleUrls: ['./dep-list.component.scss']
})
export class DepListComponent implements OnInit {

  departments = [];
  notices = [];
  count = 0;

  constructor(public modalCtr: ModalController, private http: HTTP) {
    // console.log("deplist", navParms.get('dep'));
    // dep = navParms;
    this.notices[0] = [];
    http.get('https://sesatest.000webhostapp.com/public/api/notice/1/get', {}, {})
    .then(data => {
      //this.count++;
      this.notices[1] = JSON.parse(data.data);
      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);
  
    })
    .catch(error => {
  
      console.log(error);
      console.log(error.error); // error message as string
      console.log(error.headers);
  
    });

    http.get('https://sesatest.000webhostapp.com/public/api/notice/2/get', {}, {})
    .then(data => {
  
      this.notices[2] = JSON.parse(data.data);
      console.log(data.data);
    })
    .catch(error => {
  
      console.log(error);
    });

    http.get('https://sesatest.000webhostapp.com/public/api/notice/3/get', {}, {})
    .then(data => {
  
      this.notices[3] = JSON.parse(data.data);
      console.log(data.data);
    })
    .catch(error => {
  
      console.log(error);
    });

    http.get('https://sesatest.000webhostapp.com/public/api/notice/4/get', {}, {})
    .then(data => {
  
      this.notices[4] = JSON.parse(data.data);
      console.log(data.data);
    })
    .catch(error => {
  
      console.log(error);
    });

    http.get('https://sesatest.000webhostapp.com/public/api/notice/5/get', {}, {})
    .then(data => {
  
      this.notices[5] = JSON.parse(data.data);
      console.log(data.data);
    })
    .catch(error => {
  
      console.log(error);
    });

    http.get('https://sesatest.000webhostapp.com/public/api/notice/6/get', {}, {})
    .then(data => {
  
      this.notices[6] = JSON.parse(data.data);
      console.log(data.data);
    })
    .catch(error => {
  
      console.log(error);
    });

    this.departments = [
      {
        'id': 1,
        'name': 'Department of Archaelogy'
      },
      {
        'id': 2,
        'name': 'Department of Economics'
      },
      {
        'id': 3,
        'name': 'Department of Geography'
      },
      {
        'id': 4,
        'name': 'Department of History'
      },
      {
        'id': 5,
        'name': 'Department of International Studies'
      },
      {
        'id': 6,
        'name': 'Department of Library and Information Science'
      }
      
    ]
  }

  ngOnInit() {
    console.log("deplist oninit",this.notices);
  }

  async presentModal(department, id) {
    const modal = await this.modalCtr.create({
      component: DepartmentComponent,
      componentProps: { 
        notices: this.notices[id],
        department: department
      }
    });
    return await modal.present();
  }

}
