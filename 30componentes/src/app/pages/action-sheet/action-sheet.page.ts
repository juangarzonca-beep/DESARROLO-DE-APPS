import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton,
  IonButton, ActionSheetController,
} from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonButton],
})
export class ActionSheetPage {
  constructor(private actionSheetCtrl: ActionSheetController) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Opciones',
      buttons: [
        { text: 'Compartir', icon: 'share' },
        { text: 'Eliminar', role: 'destructive', icon: 'trash' },
        { text: 'Cancelar', role: 'cancel', icon: 'close' },
      ],
    });
    await actionSheet.present();
  }
}
