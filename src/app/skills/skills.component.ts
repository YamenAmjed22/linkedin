import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  name: string;
  colorClass: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {

  skillCategories: SkillCategory[] = [
    {
      name: 'Frontend Development',
      colorClass: 'color-cyan',
      skills: [
        { name: 'Angular (v18+)', level: 95 },
        { name: 'TypeScript / JavaScript', level: 90 },
        { name: 'HTML5 / SCSS / Tailwind', level: 95 },
        { name: 'RxJS / API Integration', level: 85 }
      ]
    },
    {
      name: 'Backend Development',
      colorClass: 'color-blue',
      skills: [
        { name: 'Java Spring Boot / JSF', level: 95 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'Microservices Architecture', level: 85 },
        { name: 'Hibernate / JPA', level: 90 }
      ]
    },
    {
      name: 'Databases & Tools',
      colorClass: 'color-purple',
      skills: [
        { name: 'PostgreSQL / MySQL / Oracle', level: 85 },
        { name: 'Git / GitHub / Version Control', level: 90 },
        { name: 'Postman / API Testing', level: 95 },
        { name: 'Docker / Basic CI/CD', level: 75 }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
