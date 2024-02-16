import {
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegalRoutingModule } from './legal-routing.module';
import { LegalComponent } from './legal.component';
import { SharedModule } from '../shared/shared.module';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ButtonModule } from 'primeng/button';
import { NoticesComponent } from './notices/notices.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { HttpClientModule } from '@angular/common/http';
import { TermsComponent } from './terms/terms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LegalComponent, NoticesComponent, TermsComponent],
  imports: [
    CommonModule,
    LegalRoutingModule,
    SharedModule,
    PanelMenuModule,
    ButtonModule,
    BreadcrumbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class LegalModule {}
