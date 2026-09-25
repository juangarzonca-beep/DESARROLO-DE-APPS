import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonImg, IonLabel } from '@ionic/angular';

@Component({
  selector: 'app-img',
  templateUrl: './img.page.html',
  styleUrls: ['./img.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonImg, IonLabel],
})
export class ImgPage {}
