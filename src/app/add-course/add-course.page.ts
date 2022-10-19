import { Component, OnInit } from '@angular/core';
import { ListCoursesService } from '../list-courses.service';
import { Router } from '@angular/router';
import { FireserviceService } from '../fireservice.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.page.html',
  styleUrls: ['./add-course.page.scss'],
})
export class AddCoursePage implements OnInit {
  constructor(private fireseSer: FireserviceService, private router: Router) {}

  ngOnInit() {}

  onSubmit(newAnnouncement) {
      console.log()
    this.fireseSer.saveannouncement(newAnnouncement);
    this.router.navigateByUrl('/');
  }
}
