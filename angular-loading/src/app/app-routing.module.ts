import { CustomPreloadingStrategy } from './CustomPreloadingStrategy';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';

const routes: Routes = [
 //{path:"",redirectTo:"/first",pathMatch:"full"},
//{path:"first",children:[
 // {path:"",redirectTo:"/comp1",pathMatch:"full"}
//]}
  {path:"first",loadChildren:"./sub1module/sub1module.module#Sub1moduleModule"},
  //{path:"second",loadChildren:"./sub2module/sub2module.module#Sub2moduleModule"}
  {path:"second",loadChildren:"./sub2module/sub2module.module#Sub2moduleModule",
  data:{preload:true,delay:true}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    //preloadingStrategy:NoPreloading
   //preloadingStrategy:PreloadAllModules
    preloadingStrategy:CustomPreloadingStrategy
  })],
 //imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
