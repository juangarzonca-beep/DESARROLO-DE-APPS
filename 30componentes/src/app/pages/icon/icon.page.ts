import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonIcon, IonLabel } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { heart, star, home, settings, camera, trash } from 'ionicons/icons';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.page.html',
  styleUrls: ['./icon.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonIcon, IonLabel],
})
export class IconPage {
  constructor() {
    addIcons({ heart, star, home, settings, camera, trash });
  }
}
