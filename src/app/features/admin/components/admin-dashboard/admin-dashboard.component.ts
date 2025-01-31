import { Component } from '@angular/core';
import { CourseService } from '../../../courses/services/course.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: false,
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

  courses: any[] = []; //liste des courses

  constructor(private courseService: CourseService) {}
  //recuperer tous les courses
  ngOnInit(): void {
    this.courseService.getCourses().subscribe((data) => {
      this.courses = data;
    });
  }
  //supprimer un courses
  deleteCourse(id: any): void {
    if (confirm('Etes-vous sur de vouloir supprimer ce cours ?')) {
      this.courseService.deleteCourse(id).subscribe(() => {
      this.courses = this.courses.filter(course => course.id !== id);
        alert('Cours supprime avec succes !');
      });
    }
  }

}