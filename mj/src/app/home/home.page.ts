import {Component, OnInit} from '@angular/core';
import {ElementTimeLine} from '../model/elementTimeline';
import {Dice} from '../model/Dice';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    timeLineBoolean: any;

    numberEntries = 0;
    alternate: true;
    toggle: true;
    color: false;
    size: 40;
    side = 'left';
    entries: ElementTimeLine[] = [];
    private deList: Dice [] = [];
    private pnjList: string [];
    private pjList: string [];
    private pj: [];
    private pnj: [];
    private de6: Dice;
    private de4: Dice;
    private de10: Dice;
    val = 6;
    nb = 1;
    private sum: number;
    hidden: boolean;
    musicBool: boolean;


    constructor() {
    }

    ngOnInit() {
        this.musicBool = false;
        this.timeLineBoolean = false;
        this.de6 = new Dice();
        this.de6.deValue = 6;
        this.de6.quantity = 2;
        this.de4 = new Dice();
        this.de4.deValue = 4;
        this.de4.quantity = 2;
        this.de10 = new Dice();
        this.de10.deValue = 10;
        this.de10.quantity = 1;
        this.deList.push(this.de6);
        this.deList.push(this.de4);
        this.deList.push(this.de10);
    }

    activateTimeLine() {
        this.timeLineBoolean = true;
        console.log(this.timeLineBoolean.toString());
    }

    desactivateTimeLine() {
        this.timeLineBoolean = false;
    }


    addEntry() {
        this.numberEntries++;
        const entry = {id: 0, header: '', description: '', show: true};
        this.entries.push(entry);
    }

    removeEntry() {
        if (this.numberEntries > 0) {
            this.numberEntries--;
        }
        this.entries.pop();
    }

    removeSpecificEntry(element: ElementTimeLine) {
        this.entries = this.entries.filter(elem => {
            return elem !== element;
        });
    }


    removePnj() {

    }

    removePj() {

    }

    addPj() {
        console.log('' + this.pj);
        this.pnjList.push('test');
        // this.pnj;
    }

    addPnj() {
        console.log('' + this.pnj);
        this.pjList.push('test');
    }

    activateMusic() {
        console.log('musique');
        if (this.musicBool) {
            this.musicBool = false;
        } else {
            this.musicBool = true;
        }
    }
}

