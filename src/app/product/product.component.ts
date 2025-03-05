import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [FormsModule,CommonModule,RouterLink,RouterOutlet],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  router = inject(Router)



  items=[  
    {id:1, name: 'item 1', price:'ფასი არის 5 ლარი'},
    {id:2, name: 'item 2', price:'ფასი არის 5 ლარი'},
    {id:3, name: 'item 3', price:'ფასი არის 5 ლარი'},
    {id:4, name: 'item 4', price:'ფასი არის 5 ლარი'},
    {id:5, name: 'item 5', price:'ფასი არის 5 ლარი'},

  ]

  goToDetail(id: number){
    this.router.navigate(['/product',{fragment:"team"}],{
      queryParams:{id,name:String}
    })
  }
  
}



