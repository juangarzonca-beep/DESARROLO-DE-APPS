import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonList, IonItem, IonLabel, IonIcon, IonAvatar } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { personCircle, notifications, mail } from 'ionicons/icons';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonList, IonItem, IonLabel, IonIcon, IonAvatar],
})
export class ItemPage {
  constructor() {
    addIcons({ personCircle, notifications, mail });
  }
}
