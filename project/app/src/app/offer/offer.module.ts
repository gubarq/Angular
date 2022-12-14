import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferListComponent } from './offer-list/offer-list.component';
import { OfferRoutingModule } from './offer-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NewOfferComponent } from './new-offer/new-offer.component';
import { OfferDetailComponent } from './offer-detail/offer-detail.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OfferListComponent,
    NewOfferComponent,
    OfferDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    OfferRoutingModule
  ],
  exports: [
    OfferListComponent
  ]
})
export class OfferModule { }
