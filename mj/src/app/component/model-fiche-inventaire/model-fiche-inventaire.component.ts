
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import {Item} from '../../model/Item';

@Component({
  selector: 'app-model-fiche-inventaire',
  templateUrl: './model-fiche-inventaire.component.html',
  styleUrls: ['./model-fiche-inventaire.component.scss'],
})
export class ModelFicheInventaireComponent implements OnInit {

  checked = true;
  selected = 'string';
  label = '';
  nb = 0;
  desc = '';

  inventaire: Item[] = [];

  ngOnInit() {
  }

  ajouter() {
    if ( this.label !== '' || this.desc !== '') {
      const tmp = new Item();
      tmp.nom = this.label;
      tmp.desc = this.desc;
      tmp.nb = this.nb;
      this.inventaire.push(tmp);
    }
  }

  removePostButton(item: Item) {
    this.inventaire = this.inventaire.filter((value) => {
      return value !== item;
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.inventaire, event.previousIndex, event.currentIndex);
  }
}
