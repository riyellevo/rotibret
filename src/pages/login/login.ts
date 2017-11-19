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
    if(this.uname.value == 'admin' && this.password.value == 'admin'){
         let alert = this.alertCtrl.create({
          title: 'Login Succ',
          subTitle: 'Login Succ',
          buttons: ['OK']

        });
        alert.present();
        }
    }
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
