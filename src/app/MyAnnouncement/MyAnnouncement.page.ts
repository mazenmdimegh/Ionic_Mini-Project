import { NgAnalyzeModulesHost } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FireserviceService } from '../fireservice.service';
import { ListCoursesService } from '../list-courses.service';

@Component({
  selector: 'app-MyAnnouncement',
  templateUrl: 'MyAnnouncement.page.html',
  styleUrls: ['MyAnnouncement.page.scss'],
})
export class MyAnnouncementPage implements OnInit {
  tabCourses = [];
  allAnnouncements: any;
  constructor(private courseSer: ListCoursesService,private fireseSer: FireserviceService) {}

  ngOnInit() {
    this.tabCourses = this.courseSer.getAllCourses();
    this.fireseSer.getAllannouncements().subscribe(
      data => {
        this.allAnnouncements = data;
        console.log(data);
      },
      err => {
        console.log(err);
      });
  }
}
