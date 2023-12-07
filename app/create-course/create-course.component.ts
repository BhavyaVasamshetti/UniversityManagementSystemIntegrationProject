// create-course.component.ts
import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit{
  course: Course = new Course();
  msg: any = "";


  constructor(private courseService: CourseService) {}
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
  createCourse() {
    this.courseService.saveCourse(this.course).subscribe(data => {
      this.msg = data;
    });
  }
}
