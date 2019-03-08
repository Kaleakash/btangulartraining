import { CustomPreloadingStrategy } from './CustomPreloadingStrategy';
import { Sub2moduleModule } from './sub2module/sub2module.module';
import { Sub1moduleModule } from './sub1module/sub1module.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Sub1moduleModule,
   // Sub2moduleModule
  ],
  providers: [CustomPreloadingStrategy],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("App Module loaded...")
  }
}
