import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';

import { InicioPage } from '../pages/inicio/inicio';
import { ServiciosPage } from '../pages/servicios/servicios';

import { ContactoPage } from '../pages/contacto/contacto';
import { NosotrosPage } from '../pages/nosotros/nosotros';
import { PortafolioPage } from '../pages/portafolio/portafolio';
import { EquipoPage } from '../pages/equipo/equipo';


@NgModule({
  declarations: [
    MyApp,

    InicioPage,
    ServiciosPage,
    ContactoPage,
    EquipoPage,
    PortafolioPage,
    NosotrosPage,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    InicioPage,
    ServiciosPage,
    ContactoPage,
    EquipoPage,
    PortafolioPage,
    NosotrosPage,


  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
