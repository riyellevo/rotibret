import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
     @ViewChild('username') user;
    @ViewChild('password') passwd;

  constructor(private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  reg(){
  this.fire.auth.createUserWithEmailAndPassword(this.user.value,this.passwd.value)
    .then(data => {
      console.log('got data ', data);

    })
    .catch(error => {
      console.log('got an error ', error);

    });
    console.log('Would Register with',this.user.value,this.passwd.value);
  }

}
