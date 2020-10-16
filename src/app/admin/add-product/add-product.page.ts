import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Home} from '../../home/home.model';
import {HomeService} from '../../home/home.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {
    form: FormGroup;
    type = new FormControl('');
    datas: Home[];
  constructor(
      private homeService: HomeService,
      private router: Router
  ) { }

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
      }),
      speed: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      size: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      chipset: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      processor: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
  }

  onSubmit() {
    const item = this.form.value;
    if (this.type.value === 'CPU') {
      this.homeService.newCPU(
          item.url,
          item.brand,
          item.model,
          item.stock,
          item.price,
          item.base_clock,
          item.boost_clock,
          item.core,
          item.thread
      );
      this.router.navigate(['./admin']);
    }
    if (this.type.value === 'RAM') {
      this.homeService.newRAM(
          item.url,
          item.brand,
          item.model,
          item.stock,
          item.price,
          item.speed,
          item.size
      );
      this.router.navigate(['./admin']);
    }
    if (this.type.value === 'Motherboard') {
      this.homeService.newMotherboard(
          item.url,
          item.brand,
          item.model,
          item.stock,
          item.price,
          item.chipset,
          item.processor
      );
      this.router.navigate(['./admin']);
    }
    if (this.type.value === 'GPU') {
      this.homeService.newGPU(
          item.url,
          item.brand,
          item.model,
          item.stock,
          item.price
      );
      this.router.navigate(['./admin']);
    }
  }
}
