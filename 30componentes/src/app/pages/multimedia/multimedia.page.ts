import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
  IonImg, IonThumbnail, IonItem, IonLabel,
  IonFab, IonFabButton, IonFabList, IonIcon,
  IonProgressBar, IonSpinner,
  IonSegment, IonSegmentButton,
  IonRefresher, IonRefresherContent
} from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-multimedia',
  templateUrl: './multimedia.page.html',
  styleUrls: ['./multimedia.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
    IonImg, IonThumbnail, IonItem, IonLabel,
    IonFab, IonFabButton, IonFabList, IonIcon,
    IonProgressBar, IonSpinner,
    IonSegment, IonSegmentButton,
    IonRefresher, IonRefresherContent
  ],
})
export class MultimediaPage {
  segmentoActivo = 'fotos';

  refrescar(event: any) {
    setTimeout(() => {
      event.target.complete();
    }, 1500);
  }
}
