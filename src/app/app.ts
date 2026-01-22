import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router'; // Add this import
import { EmployeeService } from './employee';
import { ProductsService } from './products';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet], // Add RouterOutlet here
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit { // Class name is AppComponent
  public employees: any[] = [];
  public products: any[] = [];

  constructor(
    private _employeeService: EmployeeService,
    private _productsService: ProductsService
  ) {}

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this.products = this._productsService.getProducts();
  }
}
