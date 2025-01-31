import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';

//les routes du module admin
const routes: Routes = [
  { path: '', component: AdminDashboardComponent },  //route pour afficher tableau qui contient les cours avec les actions
  { path: 'edit-course/:id', component: EditCourseComponent }, //route pour modifier un courses
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  //utilisation de forChild pour declarer les routes d'un module enfant
  exports: [RouterModule]                    
})
export class AdminRoutingModule { }
