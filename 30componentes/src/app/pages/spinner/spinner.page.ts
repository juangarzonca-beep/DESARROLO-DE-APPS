import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonSpinner, IonLabel } from '@ionic/angular';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.page.html',
  styleUrls: ['./spinner.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonSpinner, IonLabel],
})
export class SpinnerPage {}
