import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAnnouncementPage } from './MyAnnouncement.page';

const routes: Routes = [
  {
    path: '',
    component: MyAnnouncementPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAnnouncementPageRoutingModule {}
