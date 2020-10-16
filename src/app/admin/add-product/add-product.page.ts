import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {
    form: FormGroup;
    type = new FormControl('');
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      url: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      type: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      brand: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      model: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      price: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      stock: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      base_clock: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      boost_clock: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      core: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      thread: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
  }

}
