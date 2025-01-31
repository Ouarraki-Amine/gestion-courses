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
  newCourse = {title: '',description: '',duration: 0,image: ''};

  constructor(private courseService: CourseService, private router: Router) {}

  //gerer la selection d'un image
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.newCourse.image = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  //ajouter un courses
  addCourse(): void {
    this.courseService.addCourse(this.newCourse).subscribe(() => {
      alert('Cours ajoute avec succes');
      this.router.navigate(['/admin']);
    });
  }
}
