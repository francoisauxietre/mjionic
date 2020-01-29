import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GeneratorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-generator',
  templateUrl: 'generator.html',
})
export class GeneratorPage {

  listDe = [4, 6, 8, 10, 12, 20, 100, 'Autre'];
  total: number;
  selectDe: number;
  nbDe = 1;
  listValue = '';
  listValueSorted = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeneratorPage');
  }
  onSubmit() {

    this.listValue = '';
    this.listValueSorted = [];
    if (this.nbDe != null && this.selectDe != null) {
      if (!isNaN(this.selectDe)) {
        let i = this.nbDe;
        this.total = 0;
        this.listValue = '';
        while (i > 0) {
          const value = (Math.floor(Math.random() * this.selectDe) + 1);
          this.listValueSorted.push(value);
          this.total = this.total + value;
          i--;
        }
        this.listValueSorted.sort((a, b) => a - b);
        this.listValueSorted.forEach(element => this.listValue += '[' + element.toString() + '] ');
      } else {
        const num = window.prompt('Entrez une valeur de dé personnalisée:');
        if (num === '') {
          window.alert('Veuillez choisir une taille de dé');
        } else {
          this.listDe.pop();
          this.listDe.push(num);
          this.listDe.push('Autre');
          //ici il faudrait faire un pop up quand
        }
      }
    } else {
      window.alert('Veuillez choisir une taille de dé');
    }


  }}
