// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { EnrollmentListComponent } from './enrollment-list/enrollment-list.component';
import { EnrollmentCreateComponent } from './enrollment-create/enrollment-create.component';


const routes: Routes = [
  { path: 'students', component: StudentListComponent },
  { path: 'create-student', component: CreateStudentComponent },
  { path: 'update-student', component: UpdateStudentComponent },
  { path: 'course-list', component: CourseListComponent },
  { path: 'create-course', component: CreateCourseComponent },
  { path: 'update-course', component: UpdateCourseComponent },
  { path: 'enrollments', component: EnrollmentListComponent },
  { path: 'create-enrollment', component: EnrollmentCreateComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
