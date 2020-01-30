import {Component, Input, OnInit} from '@angular/core';
import {PostIt} from '../model/postIt';
import {TimelinePage} from '../timeline/timeline.page';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage {


  postIts: PostIt[] = [];
  @Input() curentPost: PostIt;
  count: number;

  @Input() parent: TimelinePage;
  constructor() {
    this.count = 0;
  }

  doReorder(ev: any) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }

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
