import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { TimelinePage } from './timeline.page';
import {ElementTimelinePageModule} from '../element-timeline/element-timeline.module';
import {MatButtonToggleModule, MatToolbarModule} from '@angular/material';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElementTimelinePageModule,
    MatButtonToggleModule,
    MatToolbarModule,
    RouterModule.forChild([{ path: '', component: TimelinePage }])

  ],
  exports: [
    TimelinePage
  ],
  declarations: [TimelinePage]
})
export class TimelinePageModule {}
