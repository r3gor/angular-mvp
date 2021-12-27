import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Item, GetProductsResponse } from '../interfaces/get-products-response.interface';
import { PostProductResponse } from '../interfaces/post-products-response.interface';
import { PostProductPayload } from '../interfaces/post-products-payload.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _items: Item[] = [];
  private URL: string = "http://127.0.0.1:3003/v1/products";
  private credentialsHeader = {
    "user_id": "1",
    "user_token": "asdasd",
  }

  get items(){
    return [...this._items];
  }
  
  constructor(private http: HttpClient) {
    this.loadItems()
  }

  loadItems() {
    this.http.get<GetProductsResponse>(this.URL, {
      headers: {
        ...this.credentialsHeader,
        "enable_paging": "false",
        "paging_size": "10",
        "paging_index": "1",
      },

    }).subscribe((res: GetProductsResponse) => {
      this._items = res.items;
    })
  }

  postItem(item: PostProductPayload){
    const options = {
      headers: { ...this.credentialsHeader },
    }
    
    this.http.post<PostProductResponse>(this.URL, item, options)
      .subscribe((res: PostProductResponse) => {
        if (res.success) this.loadItems();
        else console.log(res);
      })
  }

}
