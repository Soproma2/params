
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [CommonModule, RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  router = inject(Router);


  items = [

    { id: 1, name: 'PC', price: '3200$', about: 'Very Good' },
    { id: 2, name: 'Leptop', price: '2800$', about: 'Very Good' },
    { id: 3, name: 'Smartphone', price: '1000$', about: 'Very Good' },
    { id: 4, name: 'Microphone', price: '150$', about: 'Very Good' },
    { id: 5, name: 'Monitor', price: '800$', about: 'Very Good' },
    { id: 6, name: 'Headset', price: '180$', about: 'Very Good' },
    { id: 7, name: 'Keyboard', price: '250$', about: 'Very Good' },
    { id: 8, name: 'Mouse', price: '160$', about: 'Very Good' },
  ]

  goToDetail(id: number) {
    this.router.navigate(['/detail'], {
      queryParams: { id, name: String, price: String, about: String },
    });
  }


};


