import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GetCountryDataService {
  private baseUrl = 'https://api.worldbank.org/v2/country/'
  
  constructor(private http: HttpClient) { }

  getCountryData(countryCode: string): Observable<any> {
    return this.http.get(`${this.baseUrl}${countryCode}`, {
      params: {
        format: 'json'
      }
    })
  }

}
