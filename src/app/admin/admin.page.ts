import { Component, OnInit } from '@angular/core';
import {Home} from '../home/home.model';
import {HomeService} from '../home/home.service';
import {AlertController, IonItemSliding, LoadingController, ToastController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  datas: Home[];
  constructor(
      private homeService: HomeService,
      private router: Router,
      private alertCtrl: AlertController,
      private loadingCtrl: LoadingController,
      private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.datas = this.homeService.getAllDatas();
    console.log(this.datas);
  }

  async presentLoading() {
    const loading = await  this.loadingCtrl.create({
      message: 'Deleting data...',
      duration: 3000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Data deleted.',
      duration: 2000,
      color: 'warning'
    });
    toast.present();
  }

  // deleteData() {
  //   this.presentLoading().then(() => {
  //     this.homeService.deleteData(this.data.id);
  //   });
  // }

  delete(data: Home, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.presentLoading().then(() => {
      this.homeService.deleteData(data.id);
      this.router.navigate(['/']);
      this.presentToast();
    });
  }
}
