import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataServicesService } from 'src/app/core/services/data-services.service';
import { Vehicle } from '../../interfaces/vehicles.interfaces';

@Component({
  selector: 'app-list-vehicles',
  templateUrl: './list-vehicles.component.html',
  styleUrls: ['./list-vehicles.component.css']
})
export class ListVehiclesComponent implements OnInit {

  private _dataSubscription: Subscription[] = [];
  dataElement: Vehicle[] = [];
  dataElementOriginal: Vehicle[] = [];
  rutaActive = '';
  filterActive = false;
  lastFilter: any = null;

  constructor(private serviceApi: DataServicesService, private router: Router) { }

  ngOnInit(): void {
    let elemRoute = this.router.url.split('/')
    this.serviceApi.changeRouteActiveSelected(elemRoute[elemRoute.length - 1])
    this.rutaActive = elemRoute[elemRoute.length - 1]
    this._dataSubscription.push(
      this.serviceApi.getDataApi('vehicles').subscribe({
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
  selectRow(item: Vehicle) {
    this.serviceApi.changeDataVehiclesSelected(item)
    this.router.navigate(['/', 'vehicles', 'view'])
  }

  ngOnDestroy() {
    this._dataSubscription.forEach((subscription: Subscription) => {
      subscription.unsubscribe()
    });
  }

}
