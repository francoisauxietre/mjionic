import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Postit} from "../../model/postit";

@IonicPage()
@Component({
  selector: 'page-post-it',
  templateUrl: 'post-it.html',
})
export class PostItPage {

  postIts: Postit[] = [];
  show: boolean;
  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostItPage');
  }

  addPostButton() {
    const post = new Postit();
    post.id = 1;
    post.text = 'texte';
    post.title = 'titre';
    this.postIts.push(post);
    console.log(this.postIts[0]);
    this.show = true;
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

  toggleReorderGroup() {
    this.reorderGroup.disabled = !this.reorderGroup.disabled;
  }

}
