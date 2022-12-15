import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOffer } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private http: HttpClient) { }

  getOffers(maxCount?: number) {
    let url = '/api/offers';
    if (maxCount) {
      url += '?limit=5';
    }
    return this.http.get<IOffer[]>(url);
  }

  getOffer(id: string) {
    return this.http.get<IOffer>('/api/offers/' + id);
  }

  createOffer(title: string, imageUrl: string, category: string, description: string, requirments: string, salary: string) {
    return this.http.post<IOffer>('/api/offers/', {title, imageUrl, category, description, requirments, salary });
  }
}
