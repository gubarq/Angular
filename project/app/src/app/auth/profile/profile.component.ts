import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { IOffer } from 'src/app/shared/interfaces';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  offerList !: IOffer[];
  userId : string | undefined;
  isEmpty !: boolean;
  
  constructor(private apiService: ApiService, private authService: AuthService) { }

  ngOnInit(): void {
    this.apiService.loadOffers().subscribe({
      next:(value) =>{
        this.offerList = value
        this.userId = this.authService.user?._id.toString()
        this.offerList = this.offerList.filter(x => x._ownerId._id.toString() == this.userId)
      },
      error: (err) => {console.error(err)}
    })}

}
