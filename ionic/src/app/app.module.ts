import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { DataStore } from './dataStore';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LiveUpdateProvider } from '../providers/live-update/live-update';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from "../pages/login/login";
import { DashboardPage } from "../pages/dashboard/dashboard";
import { BookPage } from "../pages/book/book";
import { CreateModalPage } from "../componentScripts/listViewCreateModal";
import { DetailModalPage } from "../componentScripts/listViewDetailModal";
import { SearchModalPage } from "../componentScripts/listViewSearchModal";
import { GroovyPage } from "../pages/groovy/groovy";

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ,LoginPage,DashboardPage,BookPage,CreateModalPage,DetailModalPage,SearchModalPage,GroovyPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ,LoginPage,DashboardPage,BookPage,CreateModalPage,DetailModalPage,SearchModalPage,GroovyPage],
  providers: [
    StatusBar,
    SplashScreen,
    DataStore,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LiveUpdateProvider
  ]
})
export class AppModule {}
