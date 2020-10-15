import { Injectable } from '@angular/core';
import {Home} from './home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private datas: Home[] = [
    {
      id: 'i1',
      type: 'GPU',
      url: 'https://id-test-11.slatic.net/p/8ec70b9bafbed3bcca4db954a5b1f7f2.jpg',
      brand: 'Eagle Brand',
      model: 'MD01826',
      price: 15500,
      stock: 20
    },
    {
      id: 'i2',
      type: 'CPU',
      url: 'https://cdn.mos.cms.futurecdn.net/xNjpLhyTzTrmhh5HxuoGyA-480-80.jpg',
      brand: 'AMD',
      model: 'Ryzen 9 3900X',
      base_clock: 3.8,
      boost_clock: 4.6,
      core: 12,
      thread: 24,
      price: 7675000,
      stock: 2
    },
    {
      id: 'i3',
      type: 'RAM',
      url: 'https://www.corsair.com/medias/sys_master/images/images/h76/ha6/9112513445918/-CMW16GX4M2A2666C16-Gallery-Vengeance-RGB-Pro-10-2up.png',
      brand: 'Vengeance RGB Pro',
      model: 'DDR4',
      speed: 2666,
      size: 16,
      price: 1450000,
      stock: 4
    },
    {
      id: 'i4',
      type: 'Motherboard',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/XO_Motherboard.png/1024px-XO_Motherboard.png',
      brand: 'Ori Genuine Motherboard',
      model: '8100',
      chipset: 'Intel H55',
      processor: 'Intel',
      price: 610000,
      stock: 1
    }
  ];

  constructor() { }

  getAllDatas(){
    return [...this.datas];
  }

  getData(dataId: string){
    return {...this.datas.find(data => {
      return data.id === dataId;
      })};
  }

  deleteData(dataId: string) {
    this.datas = this.datas.filter(data => {
      return data.id !== dataId;
    });
  }
}
