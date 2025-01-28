import { Component, OnInit, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() sidenav!: MatSidenav;
  isMobile = false;
  isDarkMode: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isMobile = result.matches;
      });
    this.isDarkMode = localStorage.getItem('theme') === 'dark';
    this.updateTheme();
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.updateTheme();
  }
  
  updateTheme() {
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
      // Dynamically include the dark theme SCSS here
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
      // Dynamically include the light theme SCSS here
    }
  }
  
}
