import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { NgChartsModule } from 'ng2-charts';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { NgxDateRangeModule } from 'ngx-daterange';

import { CalendarModule } from 'ion2-calendar';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    NgChartsModule,
    NgxDateRangeModule,
    NgxSliderModule,
    CalendarModule,
  ],
  declarations: [Tab1Page],
})
export class Tab1PageModule {}
