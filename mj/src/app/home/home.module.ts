import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import {TimelinePageModule} from '../timeline/timeline.module';
import {MatButtonToggleModule, MatToolbarModule} from '@angular/material';
import {ElementTimelinePageModule} from '../element-timeline/element-timeline.module';
import {PostListPageModule} from '../postl/post-list.module';
import {PostPageModule} from '../post/post.module';
import {DiceComponent} from '../component/dice/dice.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        TimelinePageModule,
        MatToolbarModule,
        MatButtonToggleModule,
        ElementTimelinePageModule,
        PostListPageModule,
        PostPageModule
    ],
    declarations: [HomePage, DiceComponent]
})
export class HomePageModule {}
