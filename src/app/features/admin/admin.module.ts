import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    EditCourseComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
