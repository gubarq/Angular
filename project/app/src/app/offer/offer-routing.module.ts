import { RouterModule, Routes } from "@angular/router";
import { NewOfferComponent } from "./new-offer/new-offer.component";
import { OfferResolver } from "./resolvers/offer.resolver";
import { OfferDetailComponent } from "./offer-detail/offer-detail.component";
import { DeleteOfferComponent } from "./delete-offer/delete-offer.component";
const routes: Routes = [
 
  {
    path: 'new',
    data:{title:"New offer"},
    component: NewOfferComponent
  },
  {
    path: 'detail/:id',
    data:{title:"Details"},
    resolve: {
      offer: OfferResolver
    },
    component: OfferDetailComponent
  },
  {
    path: 'delete/:id',
    resolve: {offer: OfferResolver} ,
    component: DeleteOfferComponent,
    data: {
      title: 'Delete',
      loginRequired: true
    }
  }
];

export const OfferRoutingModule = RouterModule.forChild(routes);
