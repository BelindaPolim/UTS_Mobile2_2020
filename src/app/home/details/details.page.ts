import { Component, OnInit } from '@angular/core';
import {Home} from '../home.model';
import {ActivatedRoute} from '@angular/router';
import {HomeService} from '../home.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  loadedData: Home;
  constructor(
      private activatedRoute: ActivatedRoute,
      private homeService: HomeService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('dataId')) {
        return;
      }
      const dataId = paramMap.get('dataId');
      this.loadedData = this.homeService.getData(dataId);
    });
  }

}
