import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonFab, IonFabButton, IonFabList, IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { add, closeOutline, shareOutline, logoFacebook } from 'ionicons/icons';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonFab, IonFabButton, IonFabList, IonIcon],
})
export class FabPage {
  constructor() {
    addIcons({ add, closeOutline, shareOutline, logoFacebook });
  }
}
