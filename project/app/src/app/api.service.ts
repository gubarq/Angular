import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment';
import { IOffer } from './shared/interfaces/offer';


const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  loadOffers() {
    return this.httpClient.get<IOffer[]>(`${apiURL}/offers`);
  }

  loadOffer(id: number) {
    return this.httpClient.get<IOffer>(`${apiURL}/offers/${id}`);
  }

}
