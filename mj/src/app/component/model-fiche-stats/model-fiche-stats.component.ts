import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {Component, OnInit} from '@angular/core';
import {KeyType} from '../../model/KeyType';

//
// Documentation Auxietre Francois composant ModelFiche création Etienne
// ce composant permet de stocker les informations sur des statistiques

@Component({
  selector: 'app-model-fiche-stats',
  templateUrl: './model-fiche-stats.component.html',
  styleUrls: ['./model-fiche-stats.component.scss'],
})
export class ModelFicheStatsComponent implements OnInit {

 checked = true;
  selected = 'string';
  label = '';

  keyTypes: KeyType[] = [];

  ngOnInit() {
  }

  // ajout d'une statistiques aussi en clé valeur (classe dans model)
  ajouter() {
    if ( this.label !== '') {
      const tmp: KeyType = new KeyType();
      tmp.key = this.label;
      tmp.type = this.selected;
      this.keyTypes.push(tmp);
    }
  }

  // supression d'une statistiques en lui passant l'élement
  removePostButton(keyType: KeyType) {
    this.keyTypes = this.keyTypes.filter((value) => {
      return value !== keyType;
    });
  }

  // supression du dernier ajout
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.keyTypes, event.previousIndex, event.currentIndex);
  }
}
