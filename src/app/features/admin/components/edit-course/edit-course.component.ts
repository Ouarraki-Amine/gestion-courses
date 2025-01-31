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

  course: any = { id: '', title: '', description: '', duration: 0 }; 

  constructor(private courseService: CourseService,private route: ActivatedRoute,private router: Router) {}

  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getCourseDetails(id); 
    }
  }

  //recuperer les details d'un courses
  getCourseDetails(id: any): void {
    this.courseService.getCourseById(id).subscribe((data: any) => {
      this.course = data;
    });
  }

  //gerer la selection d'un image
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.course.image = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  //modifier un courses
  updateCourse(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.courseService.updateCourse(id, this.course).subscribe(() => {
      alert('Cours modifie avec succes !');
      this.router.navigate(['/admin']);
    });
  }

}
