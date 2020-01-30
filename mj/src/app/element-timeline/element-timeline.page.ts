import {Component, Input, OnInit} from '@angular/core';
import {log} from 'util';
import {ElementTimeLine} from '../model/elementTimeline';
import {TimelinePage} from '../timeline/timeline.page';
import {HomePage} from '../home/home.page';


class SubTask {
    id: number;
    description: string;
    header: string;
    show: boolean;
}

export class AppData {
    id: number;
    title: string;
    text: string;
}

@Component({
    selector: 'app-element-timeline',
    templateUrl: './element-timeline.page.html',
    styleUrls: ['./element-timeline.page.scss'],
})
export class ElementTimelinePage implements OnInit {
    @Input() entryInput: ElementTimeLine;
    @Input() parent: HomePage;
    public change: boolean;
    public subTasks: SubTask[] = [];
    public Ids: number[] = null;
    public courantId = 0;
    public showTask: boolean;
    data: AppData = {id: 0, title: '', text: ''};

    constructor() {
    }

    ngOnInit() {
        console.log('debut element time-line');
        this.showTask = false;
    }

    onExpandEntry(expanded, index) {
    }

    onHeaderClick(event) {
        console.log('expension');
    }

    modify() {
        this.change = true;
    }

    validate() {
        this.change = false;
    }

    addSubTask() {
        this.showTask = true;
        const subTask: SubTask = new SubTask();
        subTask.description = '';
        subTask.id = this.courantId;
        subTask.show = true;
        this.subTasks.push(subTask);
        this.courantId++;
    }

    validateTask() {
        this.change = false;
    }

    removeTask(task: SubTask) {
        console.log('bouton pushed');
        this.subTasks = this.subTasks.filter
        (t => t.id !== task.id);

    }

    remove() {
        this.parent.removeSpecificEntry(this.entryInput);
    }
}


