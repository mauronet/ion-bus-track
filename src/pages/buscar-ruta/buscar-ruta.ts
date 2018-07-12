import { Component } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-buscar-ruta',
  templateUrl: 'buscar-ruta.html'
})
export class BuscarRutaPage {
  items: any[];
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
        return (item.id.toLowerCase().indexOf(val.toLowerCase()) > -1)
        || (item.start.toLowerCase().indexOf(val.toLowerCase()) > -1)
        || (item.end.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.initializeItems();
    } 
  }
}
