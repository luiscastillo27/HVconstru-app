import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InicioPage } from "../pages/inicio/inicio";
import { ServiciosPage } from '../pages/servicios/servicios';
import { ContactoPage } from '../pages/contacto/contacto';
import { NosotrosPage } from '../pages/nosotros/nosotros';
import { PortafolioPage } from '../pages/portafolio/portafolio';
import { EquipoPage } from '../pages/equipo/equipo';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('NAV') nav: Nav;
  public rootPage: any;
  public pages: Array<{ titulo: string, component: any, icon: string }>;

  constructor(
    private platform:     Platform,
    private statusBar:    StatusBar,
    private splashScreen: SplashScreen,
  ) {

    this.rootPage = InicioPage;
    this.pages = [
      { titulo: 'Inicio',            component: InicioPage,     icon: 'home'},
      { titulo: 'Nosotros',          component: NosotrosPage,   icon: 'information-circle'},
      { titulo: 'Servicios',         component: ServiciosPage,  icon: 'cube'},
      { titulo: 'Portafolio',        component: PortafolioPage, icon: 'briefcase'},
      { titulo: 'Equipo de trabajo', component: EquipoPage,     icon: 'people'},
      { titulo: 'Contacto',          component: ContactoPage,   icon: 'mail'}
    ];

    platform.ready().then(() => {
      statusBar.overlaysWebView(true);
      statusBar.styleDefault();
      splashScreen.hide();
      statusBar.backgroundColorByHexString('#FF0019');
    });

  }

  goToPage(page){
    this.nav.setRoot(page);
  }

}
