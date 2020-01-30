import {Component, OnInit} from '@angular/core';
import {ElementTimeLine} from '../model/elementTimeline';
import {ConfigDe} from '../model/configDe';
import {De} from '../model/De';

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
    private deList: De [] = [];
    private pnjList: [];
    private pjList: [];
    private pj: [];
    private de6: De;
    private de4: De;
    private de10: De;
    val = 0;
    nb = 0;
    private newDe: De;


    constructor() {
    }

    ngOnInit() {
        this.timeLineBoolean = false;
        this.de6 = new De();
        this.de6.deValue = 6;
        this.de6.quantity = 0;
        this.de4 = new De();
        this.de4.deValue = 4;
        this.de4.quantity = 0;
        this.de10 = new De();
        this.de10.deValue = 10;
        this.de10.quantity = 0;
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

    addDice() {
        console.log('' + this.val);
        if (this.val !== 0 && this.nb !== 0) {
            this.newDe = new De();
            this.newDe.deValue = this.val;
            this.newDe.quantity = this.nb;
            this.deList.push(this.newDe);
        }
    }

    removeDice() {
        this.deList.pop();
    }


    removePnj() {

    }

    removePj() {

    }

    addPj() {

    }

    addPnj() {

    }
}

