import {Component, Input, OnInit} from '@angular/core';
import {log} from 'util';
import {ElementTimeLine} from '../model/elementTimeline';
import {TimelinePage} from '../timeline/timeline.page';
import {HomePage} from '../home/home.page';

//
// Documentation Auxietre Francois composant Element Time Line
// ce composant permet de créer un element unitaire qui sera utilisé par time line

// sous taches utilisé pour la time line
class SubTask {
    id: number;
    description: string;
    header: string;
    show: boolean;
}

// la classe AppData permet de stocker les élements du titre et de description principaux
export class AppData {
    id: number;
    title: string;
    text: string;
}


// element unitaire de la time line
@Component({
    selector: 'app-element-timeline',
    templateUrl: './element-timeline.page.html',
    styleUrls: ['./element-timeline.page.scss'],
})
export class ElementTimelinePage implements OnInit {
    @Input() entryInput: ElementTimeLine; // on recupere du parent cet element
    @Input() parent: HomePage; // on recupere de home des composants
    public change: boolean; // booléen pour affichage ou non dans le html
    public subTasks: SubTask[] = []; // listes des sous- taches
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


