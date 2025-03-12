import { CommonModule, Location } from '@angular/common';
import { Component, inject } from '@angular/core';

import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
itemId?:number;
itemName?:string;
itemPrice?:string;
itemAbout?:string;


route=inject(ActivatedRoute);
location=inject(Location);



ngOnInit():void{
  this.route.queryParams.subscribe((params)=>{
    this.itemId=params['id'];
    this.itemName=params['name'];
    this.itemPrice=params['price'];
    this.itemAbout=params['about'];
  });
}

goBack(){
  this.location.back();
}
}
