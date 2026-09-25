import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonChip, IonLabel, IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { close, checkmarkCircle } from 'ionicons/icons';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.page.html',
  styleUrls: ['./chip.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonChip, IonLabel, IonIcon],
})
export class ChipPage {
  constructor() {
    addIcons({ close, checkmarkCircle });
  }
}
