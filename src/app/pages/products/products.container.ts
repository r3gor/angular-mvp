import { Component, OnInit } from '@angular/core';
import { Item } from './shared/interfaces/get-products-response.interface';
import { PostProductPayload } from './shared/interfaces/post-products-payload.interface';
import { ProductsService } from './shared/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
  ]
})
export class ProductsContainer implements OnInit {

  NewPanelIsHidden = true;

  get products() {
    return this.ps.items;
  }

  constructor(private ps: ProductsService) { }

  ngOnInit(): void {
  }

  handleSubmitNewProduct(value: PostProductPayload) {
    this.ps.postItem(value)
  }

  refreshProducts() {
    this.ps.loadItems()
  }

}
