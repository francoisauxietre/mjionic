import {Component, OnInit} from '@angular/core';
import {Dice} from '../../model/Dice';

@Component({
    selector: 'app-dice',
    templateUrl: './dice.component.html',
    styleUrls: ['./dice.component.scss'],
})
export class DiceComponent implements OnInit {
    sum: number;
    deList: Dice[] = [];
    val = 6;
    nb = 1;


    constructor() {
    }

    ngOnInit() {
        this.deList.push({quantity: 2, deValue: 6, result: []});
    }


    addDice() {
        console.log('' + this.val);
        let dice;
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

    removeDice() {
        this.deList.pop();
    }

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
