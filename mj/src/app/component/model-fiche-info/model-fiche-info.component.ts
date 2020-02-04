import { Component, OnInit } from '@angular/core';

import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {KeyValue} from '../../model/KeyValue';

//
// Documentation Auxietre Francois composant ModelFiche création Etienne
// ce composant permet de stocker les informations du joueur

@Component({
  selector: 'app-model-fiche-info',
  templateUrl: './model-fiche-info.component.html',
  styleUrls: ['./model-fiche-info.component.scss'],
})
export class ModelFicheInfoComponent implements OnInit {

  checked = true;
  valeur = '';
  label = '';

  keyValues: KeyValue[] = [];

  ngOnInit() {
  }

  // ajout des infos utilisateurs
  ajouter() {
    if ( this.valeur !== '' || this.label !== '') {
      const tmp = new KeyValue();
      tmp.key = this.label;
      tmp.value = this.valeur;
      this.keyValues.push(tmp);
    }
  }
  // supression d'informations utilisateurs
  removePostButton(keyValue: KeyValue) {
    this.keyValues = this.keyValues.filter((value) => {
      return value !== keyValue;
    });
  }
  // supression de la derniere entrée
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.keyValues, event.previousIndex, event.currentIndex);
  }

}
