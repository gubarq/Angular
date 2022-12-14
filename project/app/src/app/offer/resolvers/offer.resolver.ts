import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ApiService } from "src/app/api.service";
import { IOffer } from "../../shared/interfaces";

@Injectable({
  providedIn: 'root'
})
export class OfferResolver implements Resolve<IOffer | null> {
  constructor(private apiService: ApiService, private router: Router) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IOffer | null | Observable<IOffer> | Promise<IOffer> {
    const offerId = route.params['id'];
    if (!offerId) {
      this.router.navigate(['/offer/recent']);
      return null;
    }
    return this.apiService.loadOffer(offerId);
  }


}