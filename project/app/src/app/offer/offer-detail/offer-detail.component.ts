import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { IOffer, IUser } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.scss']
})
export class OfferDetailComponent implements OnInit {
  
  offer : IOffer;
  user: IUser | null = null;
  isOwner !: boolean;
  
  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService) {
    this.offer = this.activatedRoute.snapshot.data?.['offer'];
    console.log(this.activatedRoute.snapshot.data?.['offer']);
    
  }

  ngOnInit(): void {
    this.user = this.authService.user;
    this.user?._id.toString() == this.offer?._ownerId.toString() ? this.isOwner=true : this.isOwner=false
  }
  

}

