import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from './comp1/comp1.component';
import { Route1RoutingModule } from './route1/route1-routing.module';
@NgModule({
  declarations: [
    Comp1Component
    ],
  imports: [
    CommonModule,Route1RoutingModule
  ]
})
export class Sub1moduleModule { 
  constructor(){
    console.log("Sub1 Module loaded...")
  }
}
