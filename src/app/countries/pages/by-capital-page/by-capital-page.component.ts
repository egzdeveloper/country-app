import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private countriesSvc: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesSvc.cacheStore.byCapital.countries;
    this.initialValue = this.countriesSvc.cacheStore.byCapital.term;
  }

  searchByCapital( value: string ):void {

    this.isLoading = true;

    this.countriesSvc.searchCapital(value)
      .subscribe( countries => {
        this.countries = countries;
        this.isLoading = false;
      });
  }

}
