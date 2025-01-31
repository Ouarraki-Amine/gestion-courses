import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-courses-card',
  standalone: false,
  
  templateUrl: './courses-card.component.html',
  styleUrl: './courses-card.component.css'
})
export class CoursesCardComponent {

  @Input() course: any; //declaration de l'input course permet de passer un objet courses depuis le parent
}
