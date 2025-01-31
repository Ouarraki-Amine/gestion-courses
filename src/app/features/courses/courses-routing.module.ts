import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { AddCoursesComponent } from './components/add-courses/add-courses.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';

const routes: Routes = [
  { path: '', component: CoursesComponent },  //route par defaut qui affiche la liste des courses
  { path: 'add', component: AddCoursesComponent },  //route pour ajouter un nouveau courses
  { path: ':id', component: CourseDetailComponent }  //route pour afficher detail d'un courses prend l'id en parametre
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  
  exports: [RouterModule]                    
})
export class CoursesRoutingModule { }
