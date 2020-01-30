import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';


import {ElementTimelinePage} from './element-timeline.page';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NgbCollapseModule
    ],
  exports: [
    ElementTimelinePage
  ],
  declarations: [ElementTimelinePage]
})
export class ElementTimelinePageModule {
}
