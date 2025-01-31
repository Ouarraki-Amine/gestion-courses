import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-detail',
  standalone: false,
  
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent {

  course: any;

  constructor(private route: ActivatedRoute, private courseService: CourseService) {}

  //recuperer les details d'un courses avec leur id
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.courseService.getCourseById(id).subscribe((data) => {
      this.course = data;
    });
  }

}
