import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// 1. Import your new component
import { PipesDemoComponent } from './pipes-demo/pipes-demo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PipesDemoComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mid-project');
}
