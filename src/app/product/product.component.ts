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
    { id: 1, name: 'ლეპტოპი', price: 2500, description: 'მაღალი წარმადობის ლეპტოპი' },
    { id: 2, name: 'სმარტფონი', price: 1200, description: 'ახალი თაობის სმარტფონი' },
    { id: 3, name: 'ყურსასმენები', price: 300, description: 'ხარისხიანი აუდიო ყურსასმენები' }

  ]

  goToDetail(id: number){
    this.router.navigate(['/product',{fragment:"team"}],{
      queryParams:{id,name:String}
    })
  }
  
}



