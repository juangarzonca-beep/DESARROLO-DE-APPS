import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonItem, IonTextarea } from '@ionic/angular';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.page.html',
  styleUrls: ['./textarea.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonItem, IonTextarea],
})
export class TextareaPage {}
