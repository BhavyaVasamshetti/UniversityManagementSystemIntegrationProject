// course.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private restUrl = 'http://localhost:8081/courses';

  constructor(private httpClient: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`${this.restUrl}/all`, { responseType: 'json' });
  }

  saveCourse(course: Course): Observable<Object> {
    return this.httpClient.post(`${this.restUrl}/add`, course, { responseType: 'text' });
  }

  updateCourse(course: Course): Observable<Object> {
    return this.httpClient.put(`${this.restUrl}/update`, course, { responseType: 'text' });
  }

}
