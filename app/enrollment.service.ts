import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enrollment } from './enrollment';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private restUrl = 'http://localhost:8081/enrollments';

  constructor(private httpClient: HttpClient) {}
  getEnrollments(): Observable<Enrollment[]> {
    return this.httpClient.get<Enrollment[]>(`${this.restUrl}/all`, { responseType: 'json' });
  }


  saveEnrollment(enrollment: Enrollment): Observable<Object> {
    return this.httpClient.post(`${this.restUrl}/add`, enrollment, {
      responseType: 'text'
    });
  }

  }


