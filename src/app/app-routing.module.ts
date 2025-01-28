import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './features/courses/components/courses/courses.component';
import { AddCoursesComponent } from './features/courses/components/add-courses/add-courses.component';
import { CourseDetailComponent } from './features/courses/components/course-detail/course-detail.component';
import { AdminDashboardComponent } from './features/admin/components/admin-dashboard/admin-dashboard.component';
import { EditCourseComponent } from './features/admin/components/edit-course/edit-course.component';

const routes: Routes = [
  { path: 'courses', component: CoursesComponent },
  { path: 'courses/add', component: AddCoursesComponent },
  { path: 'courses/:id', component: CourseDetailComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'admin/edit-course/:id', component: EditCourseComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
