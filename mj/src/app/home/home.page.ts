import {Component, OnInit} from '@angular/core';
import {ElementTimeLine} from '../model/elementTimeline';

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


    constructor() {
    }

    ngOnInit() {
        this.timeLineBoolean = false;
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

}

