import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonGrid, IonRow, IonCol, IonImg, IonFab,
  IonFabButton, IonIcon, IonCard, IonButton,
  IonItem, IonLabel, IonToggle, ToastController
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { camera, trashOutline, sparkles, flashOffOutline } from 'ionicons/icons';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonGrid, IonRow, IonCol, IonImg, IonFab,
    IonFabButton, IonIcon, IonCard, IonButton,
    IonItem, IonLabel, IonToggle
  ],
  templateUrl: './gallery-page.page.html'
})
export class GalleryPagePage {

  public photoService = inject(PhotoService);
  private toastController = inject(ToastController);

  public isHighDef = signal<boolean>(false);

  constructor() {
    addIcons({ camera, trashOutline, sparkles, flashOffOutline });
  }

  toggleQuality(enabled: boolean): void {
    this.isHighDef.set(enabled);
  }

  async takePhoto(): Promise<void> {
    const result = await this.photoService.takeNewPhoto(this.isHighDef());
    if (!result.success && result.reason === 'permission_denied') {
      await this.showPermissionWarningToast();
    }
  }

  private async showPermissionWarningToast(): Promise<void> {
    const toast = await this.toastController.create({
      message: 'Permiso denegado. Conceda acceso a la cámara y galería en los ajustes del dispositivo.',
      duration: 3500,
      position: 'bottom',
      color: 'danger',
      buttons: [
        { text: 'Entendido', role: 'cancel' }
      ]
    });
    await toast.present();
  }
}
