import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursesCardComponent } from './components/courses-card/courses-card.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { AddCoursesComponent } from './components/add-courses/add-courses.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CoursesComponent,
    CoursesCardComponent,
    CourseDetailComponent,
    AddCoursesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ]
})
export class CoursesModule { }
