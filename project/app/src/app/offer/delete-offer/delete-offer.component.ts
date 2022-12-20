import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IOffer } from 'src/app/shared/interfaces';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-delete-offer',
  templateUrl: './delete-offer.component.html',
  styleUrls: ['./delete-offer.component.scss']
})
export class DeleteOfferComponent {

  offerData : IOffer | null = null;
  offerId: string | undefined;
  
  constructor(private offerService: OfferService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.offerData=this.activatedRoute.snapshot.data?.['offer'];
    this.offerId=this.offerData?._id.toString();
    this.offerService.deleteOffer(this.offerId).subscribe({
      next: ()=>{
        this.router.navigate(['/'])
      },
      error: (err) => {console.error(err)}
      
    })}

}
