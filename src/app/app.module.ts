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
    IonicModule.forRoot(MyApp)
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}