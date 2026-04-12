import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isScrolled = false;
  isMenuOpen = false;
  isHidden = false;
  lastScrollTop = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > 50) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }

    if (st > this.lastScrollTop && st > 100) {
      // Downscroll
      this.isHidden = true;
      this.isMenuOpen = false; // close menu if open while scrolling down
    } else {
      // Upscroll
      this.isHidden = false;
    }

    this.lastScrollTop = st <= 0 ? 0 : st;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
