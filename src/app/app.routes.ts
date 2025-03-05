import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    {path:"", component:ProductComponent},
    {path:"product/:id/:name", component:DetailsComponent}
];
