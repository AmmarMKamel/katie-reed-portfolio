import { Component } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";

import {ProjectCardComponent} from "../project-card/project-card.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    ProjectCardComponent,
    NgForOf,
    NgClass
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  projects: string[];

  constructor() {
    this.projects = [
      "web design",
      "mobile design",
      "logo design",
      "web application development",
      "mobile application development",
      "pwa development"
    ]
  }
}
