import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent { 
 datePipe = new DatePipe('en-US');
 currentYear = this.datePipe.transform(new Date(), 'yyyy');}
