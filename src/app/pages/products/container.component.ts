import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  template: `
    <app-products></app-products>
  `,
  styles: [
  ]
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
