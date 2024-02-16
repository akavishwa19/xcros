import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { ModalModule } from "ngx-bootstrap/modal";
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from "primeng/messages";
import { LandingComponent } from './landing/landing.component';
import {SharedModule} from "../shared/shared.module";
import {  SwiperModule } from 'swiper/angular';
import { IntroComponent } from './intro/intro.component';


@NgModule({
    declarations: [
        PagesComponent,
        ComingSoonComponent,
        LandingComponent,
        IntroComponent,
    ],
    exports: [
        IntroComponent
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        ModalModule.forRoot(),
        ToastModule,
        MessagesModule,
        SharedModule,
        SwiperModule
    ]
})
export class PagesModule { }
