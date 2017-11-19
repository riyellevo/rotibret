import { Component } from '@angular/core';
import{NavController} from 'ionic-angular';
import {TesPage} from '../tes/tes';
import {LoginPage} from '../login/login';
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public navCtrl: NavController) {
  

  }
  
  opentes(){
  this.navCtrl.push(TesPage);
  }
  openloginpage(){
  this.navCtrl.push(LoginPage);
  }
}
