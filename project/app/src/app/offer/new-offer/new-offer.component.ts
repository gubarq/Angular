import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrls: ['./new-offer.component.scss']
})
export class NewOfferComponent {

  constructor(
    private offerService: OfferService,
    private router: Router
  ) { }

  newOfferHandler(form: NgForm): void {
    if (form.invalid) { return; }
    const { title, imageUrl, category, description, requirements, salary } = form.value;

    this.offerService.createOffer(title, imageUrl, category, description, requirements, salary)
      .subscribe(() => {
        this.router.navigate(['/'])
      })
  }
}
