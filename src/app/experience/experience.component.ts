import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [
    {
      period: 'Recent - Present',
      role: 'Java Software Engineer',
      company: 'Futeric Company',
      description: 'Developing high-scale Fintech solutions like the Core Wallet project using Java Spring Boot, JSF, and Angular. Responsible for optimizing performance and building secure financial APIs.'
    },
    {
      period: 'Past',
      role: 'Full Stack Developer',
      company: 'Freelance & Independent Projects',
      description: 'Engineered graduation projects and advanced full-stack systems containing Java, Angular, and TypeScript interfaces while competing regularly on algorithmic playgrounds like Codeforces.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
