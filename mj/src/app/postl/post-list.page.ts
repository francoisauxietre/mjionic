import {Component, Input, OnInit} from '@angular/core';
import {PostIt} from '../model/postIt';
import {TimelinePage} from '../timeline/timeline.page';


// ancien composant a suprimer car doubler avec le component post
// Documentation Auxietre Francois composant la liste des postits ancien composant remplacé par post
// ce composant permet de faire une liste en drag & drop de post it à gauche du menu

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.page.html',
  styleUrls: ['./post-list.page.scss'],
})
export class PostListPage  {

  postIts: PostIt[] = [];
  @Input() curentPost: PostIt;
  count: number;

  @Input() parent: TimelinePage;
  constructor() {
    this.count = 0;
  }

  doReorder(ev: any) {
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);
    ev.detail.complete();
  }

  // idem a post
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

  // idem a post
  removePostButton(postIt: PostIt) {
    console.log('ici');
    this.count--;
    this.postIts = this.postIts.filter(el => {
      return el !== postIt;
    });
    console.log(this.postIts.length);
  }


  onTextChange(postit: PostIt, event: any) {
    const p = this.postIts.find(value => {
      return value === postit;
    });
    p.description = event;
  }

  onTitleChange(postit: PostIt, event: any) {
    const p = this.postIts.find(value => {
      return value === postit;
    });
    p.title = event;
  }
}
