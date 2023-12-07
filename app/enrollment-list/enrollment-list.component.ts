import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enrollment } from '../enrollment';
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-enrollment-list',
  templateUrl: './enrollment-list.component.html',
  styleUrls: ['./enrollment-list.component.css']
})
export class EnrollmentListComponent implements OnInit {
  enrollments: Enrollment[] = [];
  enrollment:Enrollment=new Enrollment();
  constructor(private enrollmentService: EnrollmentService) {}

  ngOnInit(): void {
    this.getEnrollments();
  }
  getEnrollments() {
    this.enrollmentService.getEnrollments().subscribe(
      data => {
        this.enrollments = data;

      }
    );
  }
}
