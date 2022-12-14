import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { IOffer } from '../../shared/interfaces';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.scss']
})
export class OfferListComponent implements OnInit {

  offerList: IOffer[] | null = null;
  errorFetcingData = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.loadOffers().subscribe({
      next: (value) => {
        this.offerList = value;
      },
      error: (err) => {
        this.errorFetcingData = true;
        console.error(err);
      }
    });
  }

}
