// update-course.component.ts
import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {
  course: Course = new Course();
  msg: any = '';

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  updateCourse() {
    this.courseService.updateCourse(this.course).subscribe(
      data => {
        this.msg = data;
      }
    );
  }
}
