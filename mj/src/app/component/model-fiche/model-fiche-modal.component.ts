import {Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

export class ModelFicheModalComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
