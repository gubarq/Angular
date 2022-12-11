import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-welcome-main',
  templateUrl: './welcome-main.component.html',
  styleUrls: ['./welcome-main.component.scss']
})
export class WelcomeMainComponent {
  constructor (private apiService: ApiService){}

  ngOnInit() : void {
    this.apiService.loadPosts()
  }
}
