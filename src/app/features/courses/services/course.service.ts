import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = 'http://localhost:3000/courses'; // url de l'api pour interagir avec les donnees du courses

  constructor(private http: HttpClient) {}

  //recupere la liste de tous les courses
  getCourses(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  //recupere un courses avec leur id
  getCourseById(id: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  //methode pour ajouter un nouveau courses
  addCourse(course: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, course);
  }

  //methode pour modifier un courses existant 
  updateCourse(id: any, course: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, course);
  }

  //methode pour suprimer un courses avec leur id
  deleteCourse(id: any): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
