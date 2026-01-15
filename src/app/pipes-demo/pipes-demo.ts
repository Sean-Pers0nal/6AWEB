import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css'
})
export class PipesDemoComponent {
  // Core Data Properties
  presentDate = new Date();
  price = 24095.75;
  decimalValue = 0.897645;
  fruits = ['Apple', 'Mango', 'Kiwi', 'Berry', 'Grape'];

  // Data for Additional Pipes
  jsonObj = { status: 'operational', logs: 42, core: 'v17.b' };
  message = 'angular pipes Midterm Project';

  // High-performance stream for the AsyncPipe
  time$ = interval(1000).pipe(map(() => new Date()));
}
