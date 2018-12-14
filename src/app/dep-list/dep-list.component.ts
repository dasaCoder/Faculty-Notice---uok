import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DepartmentComponent } from '../department/department.component';

//import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-dep-list',
  templateUrl: './dep-list.component.html',
  styleUrls: ['./dep-list.component.scss']
})
export class DepListComponent implements OnInit {

  departments = [];
  notices = [];

  constructor(public modalCtr: ModalController) { 
    //console.log("deplist", navParms.get('dep'));
    //dep = navParms;
    // http.get("https://sesatest.000webhostapp.com/public/api/notice/1/get")
    //   .subscribe(data => {
    //     console.log(data);
    //   })

    this.notices[0] = [{"id":1,"faculty_id":"1","department_id":"1","body":"i","created_at":"2018-12-10 01:13:35","updated_at":"2018-12-10 01:13:35"},{"id":2,"faculty_id":"1","department_id":"1","body":"this is notce","created_at":"2018-12-10 01:14:40","updated_at":"2018-12-10 01:14:40"},{"id":3,"faculty_id":"1","department_id":"1","body":"tete","created_at":"2018-12-10 01:24:32","updated_at":"2018-12-10 01:24:32"},{"id":4,"faculty_id":"1","department_id":"1","body":"df","created_at":"2018-12-10 09:04:54","updated_at":"2018-12-10 09:04:54"}];

    

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
    console.log("deplist oninit");
  }

  async presentModal(department) {
    const modal = await this.modalCtr.create({
      component: DepartmentComponent,
      componentProps: { 
        notices: this.notices[0],
        department: department
      }
    });
    return await modal.present();
  }

}
