import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonButton, IonModal, IonAlert, IonActionSheet,
  IonToast, IonLoading, IonPopover,
  AlertController, ActionSheetController, ToastController, LoadingController
} from '@ionic/angular';

@Component({
  selector: 'app-overlays',
  templateUrl: './overlays.page.html',
  styleUrls: ['./overlays.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonButton, IonModal, IonAlert, IonActionSheet,
    IonToast, IonLoading, IonPopover
  ],
})
export class OverlaysPage {
  isModalOpen = false;
  isToastOpen = false;
  isLoadingOpen = false;
  isPopoverOpen = false;

  alertButtons = ['Aceptar', 'Cancelar'];
  actionSheetButtons = [
    { text: 'Editar', role: 'edit' },
    { text: 'Eliminar', role: 'destructive' },
    { text: 'Cancelar', role: 'cancel' },
  ];

  setModalOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  setToastOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  setLoadingOpen(isOpen: boolean) {
    this.isLoadingOpen = isOpen;
    if (isOpen) {
      setTimeout(() => (this.isLoadingOpen = false), 2000);
    }
  }

  setPopoverOpen(isOpen: boolean) {
    this.isPopoverOpen = isOpen;
  }
}
