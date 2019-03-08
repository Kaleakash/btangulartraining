import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp2Component } from './comp2/comp2.component';
import { Route2RoutingModule } from './route2/route2-routing.module';

@NgModule({
  declarations: [
    Comp2Component
    ],
  imports: [
    CommonModule,Route2RoutingModule
  ]
})
export class Sub2moduleModule {
  constructor(){
    console.log("Sub2 Module loaded...")
  }
 }
