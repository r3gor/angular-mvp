import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../shared/interfaces/get-products-response.interface';

@Component({
    selector: '<app-table-items>',
    templateUrl: 'table-items.component.html'
})

export class TableItemsComponent implements OnInit {

    @Input() items: Item[] = [];

    constructor() { }

    ngOnInit() {
    }
}