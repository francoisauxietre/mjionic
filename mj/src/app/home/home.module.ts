import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import {TimelinePageModule} from '../timeline/timeline.module';
import {MatButtonToggleModule, MatToolbarModule} from '@angular/material';
import {ElementTimelinePageModule} from '../element-timeline/element-timeline.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        TimelinePageModule,
        MatToolbarModule,
        MatButtonToggleModule,
        ElementTimelinePageModule
    ],
  declarations: [HomePage]
})
export class HomePageModule {}
