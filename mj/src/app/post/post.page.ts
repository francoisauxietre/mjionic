import {Component, Input, OnInit} from '@angular/core';
import {PostIt} from '../model/postIt';
import {TimelinePage} from '../timeline/timeline.page';

//
// Documentation Auxietre Francois composant Post affichant les post it
// ce composant permet de faire une liste en drag & drop de post it à gauche du menu

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage {


  postIts: PostIt[] = []; // listes des postits
  @Input() curentPost: PostIt; // Imput (du parent) postit courant utilisé pour 'ordre et le drag and drop
  count: number; // nombre de postit, on pourrait aussi faire postIts.length et l'avoir aussi

  @Input() parent: TimelinePage; // Input (du parent) la page du timeline
  constructor() {
    this.count = 0;
  }

  // réordonne les postit en faisant un drag and drop sur la partie droite du postit
  doReorder(ev: any) {

    // pourra devenir un logger si mise en production de l'appli
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);
    ev.detail.complete();
  }

  // ajout d'un postit
  addPostButton() {
    const post = new PostIt();
    post.id = this.count;
    post.title = 'titre';
    post.description = 'test' + this.count;
    this.postIts.push(post);
    console.log(this.postIts[0]);
    this.count++;
    this.curentPost = post;
  }

  // supression du post it en parametre
  removePostButton(postIt: PostIt) {
    console.log('ici');
    this.count--;
    this.postIts = this.postIts.filter(el => {
      return el !== postIt;
    });
    console.log(this.postIts.length);
  }

  // pour plus tard si le texte change
  onTextChange(postit: PostIt, event: any) {
    const p = this.postIts.find(value => {
      return value === postit;
    });
    p.description = event;
  }

  // si le titre changera
  onTitleChange(postit: PostIt, event: any) {
    const p = this.postIts.find(value => {
      return value === postit;
    });
    p.title = event;
  }
}
