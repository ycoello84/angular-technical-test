import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataServicesService } from 'src/app/core/services/data-services.service';

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.css']
})
export class ListFilmsComponent implements OnInit, OnDestroy {

  private _dataSubscription: Subscription[] = [];
  dataElement: any = [];
  dataElementOriginal: any = [];
  rutaActive = '';
  filterActive = false;
  lastFilter: any = null;

  constructor(private serviceApi: DataServicesService, private router: Router) {

  }

  ngOnInit(): void {
    let elemRoute = this.router.url.split('/')
    this.serviceApi.changeRouteActiveSelected(elemRoute[elemRoute.length - 1])
    this.rutaActive = elemRoute[elemRoute.length - 1]

    this._dataSubscription.push(
      this.serviceApi.getDataApi('films').subscribe({
        next: (data: any) => {
          this.dataElement = data.results;
          this.dataElementOriginal = data.results;
          console.log('Data search data filter Active films: ', this.filterActive)
          if (this.filterActive == true) {
            console.log('Data search data filter Active films: ',)
            this.filterData(this.lastFilter.word)
          }
        }
      })
    )
    this._dataSubscription.push(
      this.serviceApi.currentDataFilter.subscribe({
        next: (data: any) => {
          console.log('Data search data list films: ', this.rutaActive, data)
          this.lastFilter = data
          if (data != null) {
            if (data.rute == this.rutaActive) {
              console.log('Data search data list films 2: ', this.rutaActive, data)
              this.filterData(data.word)
            }
          }

        }
      })
    )

  }
  // ----------------------------------------------------------------
  filterData(data: string) {
    if (data == '') {
      this.filterActive = false
      this.chargeAllData()
    } else {
      this.filterActive = true
      this.dataElement = this.dataElementOriginal.filter((element: any) => (element.title).toLowerCase().includes(data.toLowerCase()));
    }
  }
  // -----------------
  chargeAllData() {
    this.dataElement = this.dataElementOriginal
  }

  ngOnDestroy() {
    this._dataSubscription.forEach((subscription: Subscription) => {
      subscription.unsubscribe()
    });
  }

}
