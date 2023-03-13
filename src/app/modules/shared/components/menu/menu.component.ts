import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})



export class MenuComponent {

  menus = [
   { id: 1, descripcion: 'Clientes'},
   { id: 2, descripcion: 'Socias'},
   { id: 3, descripcion: 'Nosotros'},
   { id: 4, descripcion: 'Noticias'},
   { id: 5, descripcion: 'Consejo'},
   { id: 6, descripcion: 'Contactos'},
   { id: 7, descripcion: 'Bases'},
   { id: 8, descripcion: 'Imagenes Inicio'},
   { id: 9, descripcion: 'Documentos'},
   { id: 10, descripcion: 'Vista Previa'},
   { id: 11, descripcion: 'Aplicar'},
  ];


}
