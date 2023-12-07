// create-student.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  student: Student = new Student();
  msg: any = "";

  constructor(private studentService: StudentService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  createStudent() {
    this.studentService.saveStudent(this.student).subscribe(data => {
      this.msg = data;
    });
  }
}
