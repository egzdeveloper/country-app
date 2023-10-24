import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private countriesSvc: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesSvc.cacheStore.byCountry.countries;
    this.initialValue = this.countriesSvc.cacheStore.byCountry.term;
  }

  searchByCountry( value: string ):void {
    this.isLoading = true;
    this.countriesSvc.searchCountry(value)
      .subscribe( countries => {
        this.countries = countries;
        this.isLoading = false;
      });
  }

}
