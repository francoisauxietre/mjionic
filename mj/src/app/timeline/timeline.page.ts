import {Component, OnInit} from '@angular/core';
import {ElementTimeLine} from '../model/elementTimeline';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.page.html',
    styleUrls: ['./timeline.page.scss'],
})
export class TimelinePage implements OnInit {

    constructor() {
    }

    numberEntries = 0;
    alternate: true;
    toggle: true;
    color: false;
    size: 40;
    side = 'left';
    entries: ElementTimeLine[] = [];


    ngOnInit() {
        console.log('test');
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
