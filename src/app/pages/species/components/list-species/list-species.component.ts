import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataServicesService } from 'src/app/core/services/data-services.service';
import { Specie } from '../../interfaces/species.interfaces';

@Component({
  selector: 'app-list-species',
  templateUrl: './list-species.component.html',
  styleUrls: ['./list-species.component.css']
})
export class ListSpeciesComponent implements OnInit {

  private _dataSubscription: Subscription[] = [];
  dataElement: Specie[] = [];
  dataElementOriginal: Specie[] = [];
  rutaActive = '';
  filterActive = false;
  lastFilter: any = null;

  constructor(private serviceApi: DataServicesService, private router: Router) { }

  ngOnInit(): void {
    let elemRoute = this.router.url.split('/')
    this.serviceApi.changeRouteActiveSelected(elemRoute[elemRoute.length - 1])
    this.rutaActive = elemRoute[elemRoute.length - 1]
    this._dataSubscription.push(
      this.serviceApi.getDataApi('species').subscribe({
        next: (data: any) => {
          this.dataElement = data.results;
          this.dataElementOriginal = data.results
          if (this.filterActive == true) {
            this.filterData(this.lastFilter.word)
          }
        }
      })
    )
    this._dataSubscription.push(
      this.serviceApi.currentDataFilter.subscribe({
        next: (data: any) => {
          this.lastFilter = data
          if (data != null) {
            if (data.rute == this.rutaActive) {
              this.filterData(data.word)
            }
          }
        }
      })
    )
  }
  // ---------------------
  filterData(data: string) {
    if (data == '') {
      this.filterActive = false
      this.chargeAllData()
    } else {
      this.filterActive = true
      this.dataElement = this.dataElementOriginal.filter((element: any) => (element.name).toLowerCase().includes(data.toLowerCase()));
    }
  }
  // --------------------------------------------
  chargeAllData() {
    this.dataElement = this.dataElementOriginal
  }
  selectRow(item: Specie) {
    this.serviceApi.changeDataSpeciesSelected(item)
    this.router.navigate(['/', 'species', 'view'])
  }

  ngOnDestroy() {
    this._dataSubscription.forEach((subscription: Subscription) => {
      subscription.unsubscribe()
    });
  }

}
