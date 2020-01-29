import { Component } from '@angular/core';
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

}
