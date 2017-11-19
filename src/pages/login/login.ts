import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
import {HelloIonicPage} from '../hello-ionic/hello-ionic';
import { AngularFireAuth } from 'angularfire2/auth';


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

    
  constructor(private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  gotohome(){
      this.navCtrl.push(HelloIonicPage);

    }
    @ViewChild('username') uname;
    @ViewChild('password') password;
    alert(message: string) {
        this.alertCtrl.create({
          title: 'Info!',
          subTitle: message,
          buttons: ['OK']
        }).present();
      }
    signIn(){
        this.fire.auth.signInWithEmailAndPassword(this.uname.value,this.password.value)
        .then( data => {
          console.log('got some data', this.fire.auth.currentUser);
          this.alert('Success! You\'re logged in');
          this.navCtrl.setRoot( LoggedinPage );
          // user is logged in
        })
        .catch( error => {
          console.log('got an error', error);
          this.alert(error.message);
        })
      	console.log('Would sign in with ', this.uname.value, this.password.value);
    }
  
}
