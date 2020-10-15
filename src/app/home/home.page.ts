import {Component, OnInit, ViewChild} from '@angular/core';
import {Home} from './home.model';
import {HomeService} from './home.service';
import {IonSlides} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  datas: Home[];
  listView: boolean;

  @ViewChild('featuredItems') slider: IonSlides;
  sliderOpts = {
    autoplay: true,
    speed: 3000,
    loop: true
  };

  constructor(
      private homeService: HomeService
  ) {}

  ngOnInit() {
    this.listView = false;
    this.datas = this.homeService.getAllDatas();
  }

  changeView() {
    if (this.listView === false) {
      this.listView = true;
    }
    else {
      this.listView = false;
    }
  }
}
