import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    {path:"product", component:ProductComponent},
    {path:"product/:id", component:ProductComponent},
    {path:"details", component:DetailsComponent}
];
