import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegalComponent } from './legal.component';
import {NoticesComponent} from "./notices/notices.component";
import {TermsComponent} from "./terms/terms.component";

const routes: Routes = [{ path: '', component: LegalComponent,
  children:[
    {
      path:'',
      component:NoticesComponent
    },
    {
      path:'notices',
      component:NoticesComponent
    },
    {
      path:'terms',
      component:TermsComponent
    }
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegalRoutingModule { }
