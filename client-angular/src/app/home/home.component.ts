import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'welcome';
  labels = ['Customers', 'Products', 'Orders'];
  success= true;

  getTitleClass(): string {
    return this.success ? 'text-info' : 'text-danger';
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
