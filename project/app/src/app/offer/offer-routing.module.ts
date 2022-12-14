import { RouterModule, Routes } from "@angular/router";
import { NewOfferComponent } from "./new-offer/new-offer.component";
import { OfferResolver } from "./resolvers/offer.resolver";
import { OfferDetailComponent } from "./offer-detail/offer-detail.component";

const routes: Routes = [
  // {
  //   path: 'recent',
  //   component: MainComponent
  // },
  {
    path: 'new',
    component: NewOfferComponent
  },
  {
    path: 'detail/:id',
    resolve: {
      offer: OfferResolver
    },
    component: OfferDetailComponent
  }
];

export const OfferRoutingModule = RouterModule.forChild(routes);
