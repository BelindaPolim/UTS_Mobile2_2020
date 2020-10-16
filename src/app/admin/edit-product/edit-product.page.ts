import { Component, OnInit } from '@angular/core';
import {Home} from '../../home/home.model';
import {ActivatedRoute, Router} from '@angular/router';
import {HomeService} from '../../home/home.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.page.html',
  styleUrls: ['./edit-product.page.scss'],
})
export class EditProductPage implements OnInit {
  loadedData: Home;
  form: FormGroup;
  constructor(
      private activatedRoute: ActivatedRoute,
      private homeService: HomeService,
      private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('dataId')) {
        return;
      }
      const dataId = paramMap.get('dataId');
      this.loadedData = this.homeService.getData(dataId);
    });

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
    item.id = this.loadedData.id;
    this.homeService.updateData(
        item.id,
        item.url,
        item.brand,
        item.model,
        item.stock,
        item.price,
        item.base_clock,
        item.boost_clock,
        item.core,
        item.thread,
        item.speed,
        item.size,
        item.chipset,
        item.processor
    );
    this.router.navigate(['./admin']);
  }

}
