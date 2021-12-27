import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PostProductPayload } from '../shared/interfaces/post-products-payload.interface';
import { NewFormPresenter } from './new-form.presenter';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styles: [
  ],
  providers: [NewFormPresenter]
})
export class NewFormComponent implements OnInit {

  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();
  @Output() onSubmit: EventEmitter<PostProductPayload> = new EventEmitter<PostProductPayload>();

  constructor(public p: NewFormPresenter) { }

  ngOnInit(): void {
  }

}
