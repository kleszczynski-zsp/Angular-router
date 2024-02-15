import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './main-nav/main-nav.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, MainNavComponent
  ], 
  exports: [MainNavComponent]
})
export class NavsModule { }
