import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() project: string = "";
  @Input() bgColor: string = "";
  @Input() border: string = "";
}
