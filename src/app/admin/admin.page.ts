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

  async presentAlert(data: Home, slidingItem: IonItemSliding) {
    slidingItem.close();
    const alert = await this.alertCtrl.create({
      header: 'But whyy?',
      message: 'Are you really really sure you want to delete this data?',
      buttons: [
        {
          text: 'Maybe not',
          role: 'cancel'
        },
        {
          text: 'Yeah!',
          handler: () => {
            this.homeService.deleteData(data.id);
            this.redirectTo('/admin');
            this.presentLoading().then(() => {
              this.presentToast();
            });
          }
        }
      ]
    });
    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Data deleted.',
      duration: 2000,
      color: 'warning'
    });
    toast.present();
  }

  async presentLoading() {
    const loading = await  this.loadingCtrl.create({
      message: 'Deleting data...',
      duration: 3000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

  redirectTo(uri: string) {
    this.router.navigateByUrl('/deleting', {skipLocationChange: true}).then(() =>
    this.router.navigate([uri]));
  }

  // delete(data: Home, slidingItem: IonItemSliding) {
  //   slidingItem.close();
  //   this.presentAlert().then(() => {
  //     this.homeService.deleteData(data.id);
  //     this.redirectTo('/admin');
  //     this.presentToast();
  //   });
  // }
}
