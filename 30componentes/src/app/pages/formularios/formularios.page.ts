import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonItem, IonLabel, IonInput, IonCheckbox, IonRadioGroup, IonRadio,
  IonToggle, IonSelect, IonSelectOption, IonRange, IonSearchbar, IonDatetime
} from '@ionic/angular';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.page.html',
  styleUrls: ['./formularios.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonItem, IonLabel, IonInput, IonCheckbox, IonRadioGroup, IonRadio,
    IonToggle, IonSelect, IonSelectOption, IonRange, IonSearchbar, IonDatetime
  ],
})
export class FormulariosPage {
  nombre = '';
  aceptaTerminos = false;
  genero = 'masculino';
  notificaciones = true;
  ciudad = 'neiva';
  volumen = 50;
  fechaNacimiento = '';
}
