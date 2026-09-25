import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonRange, IonLabel, IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { volumeLow, volumeHigh } from 'ionicons/icons';

@Component({
  selector: 'app-range',
  templateUrl: './range.page.html',
  styleUrls: ['./range.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonRange, IonLabel, IonIcon],
})
export class RangePage {
  constructor() {
    addIcons({ volumeLow, volumeHigh });
  }
}
