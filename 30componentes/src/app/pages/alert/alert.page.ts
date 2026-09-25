import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton,
  IonButton, AlertController,
} from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonButton],
})
export class AlertPage {
  constructor(private alertCtrl: AlertController) {}

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alerta',
      message: 'Este es un mensaje de alerta.',
      buttons: ['OK'],
    });
    await alert.present();
  }
}
