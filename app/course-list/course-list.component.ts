// course-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  course:Course=new Course();
  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    this.courseService.getCourses().subscribe(
      data => {
        this.courses = data;

      }
    );
  }
}
