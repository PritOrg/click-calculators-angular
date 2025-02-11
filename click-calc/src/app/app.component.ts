import { OverlayContainer } from '@angular/cdk/overlay';
import {  Component,Renderer2  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calc';
  isDarkMode: boolean = false;

  constructor(
    private renderer: Renderer2,
    private overlayContainer: OverlayContainer,
  ) {}

  ngOnInit() {
    this.isDarkMode = localStorage.getItem('theme') === 'dark';
    this.updateTheme();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.updateTheme();
    console.log('Theme toggled'); 
    window.location.reload();
  }

  updateTheme() {
    if (this.isDarkMode) {
      this.renderer.addClass(document.body, 'dark-theme');
      this.overlayContainer.getContainerElement().classList.add('dark-theme');

      localStorage.setItem('theme', 'dark');
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
      this.overlayContainer.getContainerElement().classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }
}
