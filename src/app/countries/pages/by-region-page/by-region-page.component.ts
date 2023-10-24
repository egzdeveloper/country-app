import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from 'src/app/services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;

  constructor(private countriesSvc: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesSvc.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesSvc.cacheStore.byRegion.region;
  }

  searchByRegion( value: Region ):void {

    this.selectedRegion = value;

    this.isLoading = true;
    this.countriesSvc.searchRegion(value)
      .subscribe( countries => {
        this.countries = countries;
        this.isLoading = false;
      });
  }

}
