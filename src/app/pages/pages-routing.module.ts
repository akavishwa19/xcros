import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import {ComingSoonComponent} from "./coming-soon/coming-soon.component";
import {LandingComponent} from "./landing/landing.component";
import {IntroComponent} from "./intro/intro.component";

const routes: Routes = [{ path: '', component: PagesComponent ,children:[
    {
      path:'',
      component:IntroComponent
    },
    {
      path:'landing',
      component:LandingComponent
    },
    {
      path:'coming-soon',
      component:ComingSoonComponent
    }
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
