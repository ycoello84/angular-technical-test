import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataServicesService } from 'src/app/core/services/data-services.service';
import { Planet } from '../../interface/planets.interface';

@Component({
  selector: 'app-list-planets',
  templateUrl: './list-planets.component.html',
  styleUrls: ['./list-planets.component.css']
})
export class ListPlanetsComponent implements OnInit {

  private _dataSubscription: Subscription[] = [];
  dataElement: Planet[] = [];
  dataElementOriginal: Planet[] = [];
  rutaActive = '';
  filterActive = false;
  lastFilter: any = null;

  constructor(private serviceApi: DataServicesService, private router: Router) { }

  ngOnInit(): void {
    let elemRoute = this.router.url.split('/')
    this.serviceApi.changeRouteActiveSelected(elemRoute[elemRoute.length - 1])
    this.rutaActive = elemRoute[elemRoute.length - 1]

    this._dataSubscription.push(
      this.serviceApi.getDataApi('planets').subscribe({
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
      this.dataElement = this.dataElementOriginal.filter((element: Planet) => (element.name).toLowerCase().includes(data.toLowerCase()));
    }
  }
  // --------------------------------------------
  chargeAllData() {
    this.dataElement = this.dataElementOriginal
  }
  selectRow(item: Planet) {
    this.serviceApi.changeDataPlanetSelected(item)
    this.router.navigate(['/', 'planets', 'view'])
  }

  ngOnDestroy() {
    this._dataSubscription.forEach((subscription: Subscription) => {
      subscription.unsubscribe()
    });
  }

}
