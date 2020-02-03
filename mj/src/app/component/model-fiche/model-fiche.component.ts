import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ModelFicheModalComponent} from './model-fiche-modal.component';

@Component({
  selector: 'app-model-fiche',
  templateUrl: './model-fiche.component.html',
  styleUrls: ['./model-fiche.component.scss'],
})
export class ModelFicheComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit() {

  }

  openModal() {
    this.dialog.open(ModelFicheModalComponent, {
      data: {
        animal: 'panda'
      }
    });
  }
}
