import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BuscarRutaPage } from '../pages/buscar-ruta/buscar-ruta';
import { MapaRutaPage } from '../pages/mapa-ruta/mapa-ruta';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyCzkGIRENJEMTvauIEPUlcA6IR3zEhq-TM",
  authDomain: "fir-aad23.firebaseapp.com",
  databaseURL: "https://fir-aad23.firebaseio.com",
  projectId: "fir-aad23",
  storageBucket: "fir-aad23.appspot.com",
  messagingSenderId: "893753206175"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BuscarRutaPage,
    MapaRutaPage,
    TabsControllerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BuscarRutaPage,
    MapaRutaPage,
    TabsControllerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
