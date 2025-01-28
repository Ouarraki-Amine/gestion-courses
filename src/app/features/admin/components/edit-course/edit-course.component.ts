import { ActivatedRoute, Router  } from '@angular/router';
import { Component } from '@angular/core';
import { CourseService  } from '../../../courses/services/course.service';


@Component({
  selector: 'app-edit-course',
  standalone: false,
  
  templateUrl: './edit-course.component.html',
  styleUrl: './edit-course.component.css'
})
export class EditCourseComponent {

  course: any = { id: 0, title: '', description: '', duration: 0 }; 
  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getCourseDetails(id);
      console.log("object")
    }
  }

  
  getCourseDetails(id: any): void {
    this.courseService.getCourseById(id).subscribe((data: any) => {
      this.course = data;
    });
  }

  
  updateCourse(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.courseService.updateCourse(id, this.course).subscribe(() => {
      alert('Cours modifié avec succès !');
      this.router.navigate(['/admin']);
    });
  }

}
