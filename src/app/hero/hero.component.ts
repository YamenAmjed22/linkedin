import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {
  roles: string[] = ['Fintech Software Engineer', 'Spring Boot Specialist', 'Java Enterprise Architect', 'Full-Stack Web Systems'];
  currentRoleIndex: number = 0;
  typedText: string = '';
  isDeleting: boolean = false;
  typingSpeed: number = 100;

  // Terminal Logs sequence
  terminalLogs: string[] = [
    'Initializing Core Wallet Subsystem...',
    'Loading Spring-Context-Fintech-v1.4.2...',
    'Connecting to PostgreSQL:5432 (WalletPool)...',
    'Registering WalletController.java Bean...',
    'Exposing API Endpoints /api/v1/wallet/...',
    'Startup completed: Application ready (1.4s)'
  ];
  visibleLogs: string[] = [];

  ngOnInit() {
    this.typeEffect();
    this.bootUpTerminal();
  }

  bootUpTerminal() {
    let delay = 300;
    this.terminalLogs.forEach((log, index) => {
      setTimeout(() => {
        this.visibleLogs.push(log);
      }, delay);
      delay += (index === this.terminalLogs.length - 1) ? 1000 : Math.random() * 600 + 400;
    });
  }

  typeEffect() {
    const currentWord = this.roles[this.currentRoleIndex];
    if (this.isDeleting) {
      this.typedText = currentWord.substring(0, this.typedText.length - 1);
      this.typingSpeed = 50;
    } else {
      this.typedText = currentWord.substring(0, this.typedText.length + 1);
      this.typingSpeed = 150;
    }

    if (!this.isDeleting && this.typedText === currentWord) {
      this.typingSpeed = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.typedText === '') {
      this.isDeleting = false;
      this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
      this.typingSpeed = 500;
    }

    setTimeout(() => this.typeEffect(), this.typingSpeed);
  }
}
