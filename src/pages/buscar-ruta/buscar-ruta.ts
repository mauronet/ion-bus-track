import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Rx';

@Component({
  selector: 'page-buscar-ruta',
  templateUrl: 'buscar-ruta.html'
})
export class BuscarRutaPage {
  items: Observable<any[]>;
  searchQuery: string = '';

  constructor(public afDB: AngularFireDatabase) {
    this.initializeItems();
  }

  initializeItems() {
    this.afDB.list('rutas').valueChanges().subscribe(array => this.items = array);
  }

  getItems(ev: any) {
    // set val to the value of the searchbar
    const val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.id.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.initializeItems();
    }  
  }
}
