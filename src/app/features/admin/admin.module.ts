import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    AdminDashboardComponent, //declaration du composant AdminDashboardComponent qui affiche le tableau du courses
    EditCourseComponent //declaration du composant EditCourseComponent qui modifier les couses
  ],
  imports: [
    CommonModule, //importation du module contenant des directives de structure
    AdminRoutingModule, //importation du module de routage
    RouterModule, //importation du module pour naviguer entre les pages
    FormsModule //importation de formsmodule pour utiliser les formulaires et gerer les donnees avec ngModel
    
  ]
})
export class AdminModule { }
