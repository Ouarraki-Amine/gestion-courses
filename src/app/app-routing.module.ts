import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' }, //redirige l'utilisateur vers /courses 

  { path: 'courses', loadChildren: () => import('./features/courses/courses.module').then(m => m.CoursesModule) },  //chargement du module courses en lazy loading
  
  { path: 'admin', loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule),canActivate: [AuthGuard] }, //chargement du module admin en lazy loading avec la protection de la route avec authGuard
  
  { path: 'login', component: LoginComponent }, //route qui dirige vers la page de connexion
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
