// student.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private restUrl = 'http://localhost:8081/students';

  constructor(private httpClient: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${this.restUrl}/all`, { responseType: 'json' });
  }

  saveStudent(student: Student): Observable<Object> {
    return this.httpClient.post(`${this.restUrl}/add`, student, { responseType: 'text' });
  }

  updateStudent(student: Student): Observable<Object> {
    return this.httpClient.put(`${this.restUrl}/update`, student, { responseType: 'text' });
  }

  
}
