import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { INewFormGroup } from "./new-form.interface";

@Injectable()
export class NewFormPresenter {
    form: FormGroup;

    constructor(protected fb: FormBuilder) {
        this.form = this.fb.group({
            name: [''],
            id: [''],
        }) as INewFormGroup
        // TODO: formgroup as ... [done]
        // TODO: Validaciones
    }
}