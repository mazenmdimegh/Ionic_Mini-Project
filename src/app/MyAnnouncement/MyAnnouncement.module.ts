import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MyAnnouncementPage } from './MyAnnouncement.page';

import { MyAnnouncementPageRoutingModule } from './MyAnnouncement-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyAnnouncementPageRoutingModule
  ],
  declarations: [MyAnnouncementPage]
})
export class HomePageModule {}
