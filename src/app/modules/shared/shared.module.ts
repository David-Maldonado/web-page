import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MenuComponent } from './components/menu/menu.component';





@NgModule({
  declarations: [
    HeaderComponent,
    SideNavComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    MaterialModule

  ],
  exports: [
    HeaderComponent,
    SideNavComponent
  ]
})
export class SharedModule { }
