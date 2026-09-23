import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonList, IonItem, IonLabel, IonAvatar, IonBadge, IonChip,
  IonInfiniteScroll, IonInfiniteScrollContent,
  IonReorderGroup, IonReorder,
  IonAccordionGroup, IonAccordion,
  IonIcon
} from '@ionic/angular';
import { ItemReorderEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.page.html',
  styleUrls: ['./listas.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonList, IonItem, IonLabel, IonAvatar, IonBadge, IonChip,
    IonInfiniteScroll, IonInfiniteScrollContent,
    IonReorderGroup, IonReorder,
    IonAccordionGroup, IonAccordion,
    IonIcon
  ],
})
export class ListasPage {
  items = [1, 2, 3, 4, 5, 6, 7, 8];

  cargarMas(event: any) {
    setTimeout(() => {
      const ultimo = this.items[this.items.length - 1];
      this.items.push(ultimo + 1, ultimo + 2, ultimo + 3);
      event.target.complete();
      if (this.items.length > 30) {
        event.target.disabled = true;
      }
    }, 500);
  }

  reordenar(event: CustomEvent<ItemReorderEventDetail>) {
    this.items = event.detail.complete(this.items);
  }
}
