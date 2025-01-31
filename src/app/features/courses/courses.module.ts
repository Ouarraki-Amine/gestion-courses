import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursesCardComponent } from './components/courses-card/courses-card.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { AddCoursesComponent } from './components/add-courses/add-courses.component';
import { FormsModule } from '@angular/forms';
import { CoursesRoutingModule } from './courses-routing.module';

@NgModule({
  declarations: [
    CoursesComponent,   //declaration du composant pour afficher tous les courses
    CoursesCardComponent, //declaration du composant pour afficher un courses sous forme de card
    CourseDetailComponent,  //declaration du composant pour afficher les details d'un courses
    AddCoursesComponent   //declaration du composant pour ajouter un nouveau courses
  ],
  imports: [
    CommonModule, //importation du module contenant des directives de structure
    CoursesRoutingModule, //importation du module de routage pour naviguer entre les differnts composants
    FormsModule   //importation de formsmodule pour utiliser les formulaires et gerer les donnees avec ngModel
    
  ],
  exports:[
    CoursesComponent
  ]
})
export class CoursesModule { }
