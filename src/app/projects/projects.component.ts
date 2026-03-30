import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  gradient: string;
  githubLink: string;
  liveLink: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Kickoff (Graduation Project)',
      description: 'A comprehensive graduation software project structured as a full web platform.',
      technologies: ['Java', 'Spring Boot', 'Web'],
      gradient: 'linear-gradient(135deg, #00C9FF 0%, #92FE9D 100%)',
      githubLink: 'https://github.com/YamenAmjed22/Kickoff',
      liveLink: 'https://github.com/YamenAmjed22/Kickoff'
    },
    {
      title: 'MarketPlaceBackEnd',
      description: 'A robust digital marketplace backend designed for scalable e-commerce transactions and catalog management.',
      technologies: ['Java', 'Spring Boot', 'Hibernate', 'REST APIs'],
      gradient: 'linear-gradient(135deg, #FC466B 0%, #3F5EFB 100%)',
      githubLink: 'https://github.com/YamenAmjed22/MarketPlaceBackEnd',
      liveLink: 'https://github.com/YamenAmjed22/MarketPlaceBackEnd'
    },
    {
      title: 'Marketplace Front',
      description: 'The front-end Angular application interfacing heavily with the Marketplace Backend to provide a seamless user e-commerce experience.',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'HTML5'],
      gradient: 'linear-gradient(135deg, #FDBB2D 0%, #22C1C3 100%)',
      githubLink: 'https://github.com/YamenAmjed22/marketplace-front',
      liveLink: 'https://github.com/YamenAmjed22/marketplace-front'
    },
    {
      title: 'LinkedIn Web Application',
      description: 'An advanced Angular-based social networking application with smooth routing and complex user-interfacing structures.',
      technologies: ['Angular 18', 'TypeScript', 'Responsive Design'],
      gradient: 'linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%)',
      githubLink: 'https://github.com/YamenAmjed22/linkedin',
      liveLink: 'https://github.com/YamenAmjed22/linkedin'
    },
    {
      title: 'Spring Security Template',
      description: 'A secure foundation template providing JWT Authentication, Role-based Access, and standardized encryption across backend systems.',
      technologies: ['Java Spring Boot', 'Spring Security', 'JWT'],
      gradient: 'linear-gradient(135deg, #F5AF19 0%, #F12711 100%)',
      githubLink: 'https://github.com/YamenAmjed22/spring-security-template',
      liveLink: 'https://github.com/YamenAmjed22/spring-security-template'
    }
  ];
}
