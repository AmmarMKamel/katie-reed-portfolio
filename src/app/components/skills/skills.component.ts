import {Component} from '@angular/core';

import {SkillBarComponent} from "../skill-bar/skill-bar.component";
import {ISkill} from "../../models/iskill";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    SkillBarComponent,
    NgForOf
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: ISkill[];

  constructor() {
    this.skills = [
      {title: "HTML", progress: 90},
      {title: "CSS", progress: 90},
      {title: "JavaScript", progress: 80},
      {title: "React.js", progress: 80},
      {title: "Photoshop", progress: 90},
      {title: "Adobe XD", progress: 80},
      {title: "Node.js", progress: 60},
      {title: "WordPress", progress: 50},
    ]
  }
}
