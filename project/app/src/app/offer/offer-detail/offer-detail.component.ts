import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOffer } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.scss']
})
export class OfferDetailComponent implements OnInit {
  
  offer : IOffer;
  
  constructor(private activatedRoute: ActivatedRoute) {
    this.offer = this.activatedRoute.snapshot.data?.['offer'];
    console.log(this.activatedRoute.snapshot.data?.['offer']);
    
  }

  ngOnInit(): void {
    
  }

}
