import { Component } from '@angular/core';
import { GetCountryDataService } from './get-country-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = 'world-map';
  countryData: any; 

  constructor(private GetCountryDataService: GetCountryDataService) {}

  retrieveData(countryCode: string): void {
    this.GetCountryDataService.getCountryData(countryCode).subscribe({
      next: (arr) => {
        this.countryData = arr[1][0];
      }
    });
  }
}
