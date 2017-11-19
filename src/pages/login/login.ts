import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
import {HelloIonicPage} from '../hello-ionic/hello-ionic';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 nasiayamgore
 sss
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

    gotohome(){
  this.navCtrl.push(HelloIonicPage);
    
}
    @ViewChild('username') uname;
    @ViewChild('password') password;
    
    signIn(){
    console.log(this.uname.value == 'admin',this.password.value == 'admin');
    }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
