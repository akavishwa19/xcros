import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';
import { NgSelectModule } from '@ng-select/ng-select';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ModalModule } from 'ngx-bootstrap/modal';

import { TieredMenuModule } from 'primeng/tieredmenu';

@NgModule({
  declarations: [SharedComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgbAccordionModule,
    ReactiveFormsModule,
    FormsModule,
    AlertModule.forRoot(),
    NgSelectModule,
    AutoCompleteModule,
    ModalModule.forRoot(),
    TieredMenuModule,
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class SharedModule {}
