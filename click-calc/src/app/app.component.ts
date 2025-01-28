import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calc';
  isDarkMode: boolean = false;

  ngOnInit() {
    // Load theme preference from localStorage
    this.isDarkMode = localStorage.getItem('theme') === 'dark';
    this.updateTheme();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.updateTheme();
  }

  updateTheme() {
    if (this.isDarkMode) {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', 'light');
    }
  }
}
