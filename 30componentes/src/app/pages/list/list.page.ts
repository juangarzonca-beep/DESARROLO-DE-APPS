import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonList, IonListHeader, IonItem, IonLabel } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonList, IonListHeader, IonItem, IonLabel],
})
export class ListPage {
  frutas = ['Manzana', 'Banano', 'Fresa', 'Uva', 'Piña'];
}
