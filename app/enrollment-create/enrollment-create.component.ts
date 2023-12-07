import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Enrollment } from '../enrollment';
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-enrollment-create',
  templateUrl: './enrollment-create.component.html',
  styleUrls: ['./enrollment-create.component.css']
})
export class EnrollmentCreateComponent {
  enrollment: Enrollment = new Enrollment();
  msg: any = " ";

  constructor(private enrollmentService: EnrollmentService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  createEnrollment() {
    this.enrollmentService.saveEnrollment(this.enrollment).subscribe(data => {
      this.msg = data;
    });
  }
}
