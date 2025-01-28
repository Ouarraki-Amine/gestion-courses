import { Component } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-courses',
  standalone: false,
  
  templateUrl: './add-courses.component.html',
  styleUrl: './add-courses.component.css'
})
export class AddCoursesComponent {
  newCourse = {
    title: '',
    description: '',
    duration: 0,
  };

  constructor(private courseService: CourseService, private router: Router) {}

  addCourse(): void {
    this.courseService.addCourse(this.newCourse).subscribe(() => {
      alert('Cours ajouté avec succès');
      this.router.navigate(['/admin']);
    });
  }

}
