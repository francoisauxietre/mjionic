import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {KeyValue} from '../../model/KeyValue';

//
// Documentation Auxietre Francois composant ModelFiche création Etienne
// ce composant permet de stocker les équipements des joueurs


@Component({
    selector: 'app-model-fiche-equipement',
    templateUrl: './model-fiche-equipement.component.html',
    styleUrls: ['./model-fiche-equipement.component.scss'],
})
export class ModelFicheEquipementComponent implements OnInit {

    checked = true;
    desc = '';
    label = '';

    // tableau des équipements
    equipements: KeyValue[] = [];

    ngOnInit() {
    }

    // permet d'ajouter un element au tableau des equipements
    ajouter() {
        if (this.desc !== '' || this.label !== '') {
            const tmp = new KeyValue();
            tmp.key = this.label;
            tmp.value = this.desc;
            this.equipements.push(tmp);
        }
    }
    // supression grace au systeme de filter
    removePostButton(equipement: KeyValue) {
        this.equipements = this.equipements.filter((value) => {
            return value !== equipement;
        });
    }

    // utilisation d'un fonction drag and drop pour deplacer l'ordre des equipements
    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.equipements, event.previousIndex, event.currentIndex);
    }

}
