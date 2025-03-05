import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
itemId! : number;
itemName! : string;

constructor(private route: ActivatedRoute){}

ngOnInit(){
  this.itemId = Number (this.route.snapshot.paramMap.get('id'));
  this.itemName = this.route.snapshot.paramMap.get('name') || '';
}
}
