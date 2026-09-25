import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { home, search, person } from 'ionicons/icons';

@Component({
  selector: 'app-tabs-demo',
  templateUrl: './tabs-demo.page.html',
  styleUrls: ['./tabs-demo.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsDemoPage {
  seleccionado = 'inicio';
}
