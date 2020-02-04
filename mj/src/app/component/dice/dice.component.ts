import {Component, OnInit} from '@angular/core';
import {Dice} from '../../model/Dice';
//
// Documentation Auxietre Francois composant dice
// ce composant permet de générer une liste de lite de dé
// avec le nombre de dé et la valeur de chaque dé


@Component({
    selector: 'app-dice',
    templateUrl: './dice.component.html',
    styleUrls: ['./dice.component.scss'],
})
export class DiceComponent implements OnInit {
    sum: number; // valeur de la somme de dé
    deList: Dice[] = []; // liste des dés
    val = 6; // un dé par défaut valeur à 6
    nb = 1; // nombre de dé par défaut.


    constructor() {
    }

    // methode par défaut lors de l'implémentation de onInit
    ngOnInit() {
        this.deList.push({quantity: 2, deValue: 6, result: []});
    }

    /**
     * ajout d'un dé à la liste des dé
     */
    addDice() {
        console.log('' + this.val); // Uniquement pour de dev
        let dice; // creation d'un dé
        if (this.val !== 0 && this.nb !== 0) {
            this.deList.forEach(localDice => {
                if (localDice.deValue === this.val) {
                    dice = localDice;
                }
            });
            if (!dice) {
                dice = {deValue: this.val, quantity: this.nb};
                this.deList.push(dice);
            } else {
                dice.quantity += this.nb;
            }
        }
        this.launchDice();
    }

    /**
     * supression d'un dé
     */
    removeDice() {
        this.deList.pop();
    }

    /**
     * lancement du générateur grace à la liste
     */
    launchDice() {
        this.sum = 0;
        this.deList.forEach(dice => {
            dice.result = [];
            for (let i = 0; i < dice.quantity; i++) {
                const rand = Math.floor(Math.random() * (dice.deValue - 1 + 1)) + 1;
                dice.result.push(rand);
                this.sum += rand;
            }
            console.log(dice.result);
        });
    }
}
