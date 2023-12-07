// update-student.component.ts
import { Component, OnInit } from '@angular/core';

import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  student: Student = new Student();
  msg: any = "";

  constructor(
    private studentService: StudentService,
  ) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');

  }


  updateStudent() {
    this.studentService.updateStudent(this.student).subscribe(
      data => {
        this.msg = data;}
      
    );
  }
}
