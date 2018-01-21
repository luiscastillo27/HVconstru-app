import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html'
})
export class ContactoPage {

  constructor( public alertCtrl: AlertController ) {}

  ionViewDidLoad() {
  }

  login(){
    let alert = this.alertCtrl.create({
      title:    'Contacto',
      subTitle: 'Su peticion ha sido enviada exitosamente!',
      buttons:  ['OK']
    });
    alert.present();
  }

}
