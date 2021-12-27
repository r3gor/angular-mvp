import { AbstractControl, FormGroup } from "@angular/forms";
import { PostProductPayload } from "../shared/interfaces/post-products-payload.interface";

export interface INewFormGroup extends FormGroup {
    value: PostProductPayload;

    controls: {
        id:     AbstractControl;
        name:   AbstractControl;
        secret: AbstractControl;
    }
}