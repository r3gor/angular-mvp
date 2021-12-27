import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerComponent } from './container.component';
import { NewFormComponent } from './new-form/new-form.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsContainer } from './products.container';
import { TableItemsComponent } from './table-items/table-items.component';



@NgModule({
  declarations: [
    ProductsContainer,
    ContainerComponent,
    NewFormComponent,
    TableItemsComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
  ]
})
export class ProductsModule { }
