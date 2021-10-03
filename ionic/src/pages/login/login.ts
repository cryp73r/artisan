import { Component,Renderer,NgZone,NgModule } from '@angular/core';
import { NavController,ModalController, LoadingController } from 'ionic-angular';
import { DataStore } from '../../app/dataStore';
import {LiveUpdateProvider} from "../../providers/live-update/live-update";
import ChallengeHandler from "../../componentScripts/challengeHandler";
import { DashboardPage } from "../dashboard/dashboard";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

@NgModule({
  providers: [
      LiveUpdateProvider
  ]
})

export class LoginPage {

  constructor(public navCtrl: NavController, public dataStore:DataStore, public liveUpdateService:LiveUpdateProvider) {
      this.challengeHandlerComponent = new ChallengeHandler(this.securityCheckName, (err)=>{if(!err){this.navCtrl.push(this.challHandlerSuccessPage);}});

  }

    challengeHandlerComponent: ChallengeHandler;
    username: string;
    password: string;

    login() {
        this.challengeHandlerComponent.login(this.username, this.password);
    }

    securityCheckName = "UserLogin";
    challHandlerSuccessPage = DashboardPage;

    ionViewDidLoad() {
        WL.Analytics.log({ fromPage: this.navCtrl.getPrevious(this.navCtrl.getActive()).name, toPage: this.navCtrl.getActive().name }, 'PageTransition ');
        WL.Analytics.send();
    }
}