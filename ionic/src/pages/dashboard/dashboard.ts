import { Component,Renderer,NgZone,NgModule } from '@angular/core';
import { NavController,ModalController, LoadingController } from 'ionic-angular';
import { DataStore } from '../../app/dataStore';
import {LiveUpdateProvider} from "../../providers/live-update/live-update";
import { BookPage } from "../book/book";
import { GroovyPage } from "../groovy/groovy";

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})

@NgModule({
  providers: [
      LiveUpdateProvider
  ]
})

export class DashboardPage {

  constructor(public navCtrl: NavController, public dataStore:DataStore, public liveUpdateService:LiveUpdateProvider) {

  }

    dashboard_Image_7043_clickHandler() {
        this.navCtrl.push( BookPage, {
                data: {"a":"a"}
              });
    }

    dashboard_Image_3164_clickHandler() {
        this.navCtrl.push( BookPage, {
                data: {"a":"a"}
              });
    }

    dashboard_Image_9119_clickHandler() {
        this.navCtrl.push( BookPage, {
                data: {"a":"a"}
              });
    }

    dashboard_Image_9870_clickHandler() {
        this.navCtrl.push( BookPage, {
                data: {"a":"a"}
              });
    }

    ionViewDidLoad() {
        WL.Analytics.log({ fromPage: this.navCtrl.getPrevious(this.navCtrl.getActive()).name, toPage: this.navCtrl.getActive().name }, 'PageTransition ');
        WL.Analytics.send();
    }

    dashboard_Button_3405_clickHandler() {
        this.navCtrl.push( GroovyPage, {
                data: {"a":"a"}
              });
    }

    dashboard_Button_1598_clickHandler() {
        this.navCtrl.push( GroovyPage, {
                data: {"a":"a"}
              });
    }
}