import {Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';


//
// Documentation Auxietre Francois composant ModelFiche-model création Etienne
// ce composant est un sous composant de ModelFiche

export class ModelFicheModalComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
