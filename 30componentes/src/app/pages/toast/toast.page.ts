import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonButton, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonButton],
})
export class ToastPage {
  constructor(private toastCtrl: ToastController) {}

  async mostrarToast() {
    const toast = await this.toastCtrl.create({
      message: 'Producto agregado al carrito',
      duration: 2000,
      color: 'success',
      position: 'bottom',
    });
    await toast.present();
  }
}
