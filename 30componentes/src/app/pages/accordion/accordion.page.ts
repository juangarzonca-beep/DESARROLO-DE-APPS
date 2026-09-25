import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton,
  IonAccordionGroup, IonAccordion, IonItem, IonLabel,
} from '@ionic/angular';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.page.html',
  styleUrls: ['./accordion.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton,
    IonAccordionGroup, IonAccordion, IonItem, IonLabel,
  ],
})
export class AccordionPage {}
