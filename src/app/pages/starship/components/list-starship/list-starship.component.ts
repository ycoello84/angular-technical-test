import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataServicesService } from 'src/app/core/services/data-services.service';
import { Startship } from '../../interface/starships.interface';

@Component({
  selector: 'app-list-starship',
  templateUrl: './list-starship.component.html',
  styleUrls: ['./list-starship.component.css']
})
export class ListStarshipComponent implements OnInit {

  private _dataSubscription: Subscription[] = [];
  dataElement: Startship[] = [];
  dataElementOriginal: Startship[] = [];
  rutaActive = '';
  filterActive = false;
  lastFilter: any = null;

  constructor(private serviceApi: DataServicesService, private router: Router) { }

  ngOnInit(): void {
    let elemRoute = this.router.url.split('/')
    this.serviceApi.changeRouteActiveSelected(elemRoute[elemRoute.length - 1])
    this.rutaActive = elemRoute[elemRoute.length - 1]

    this._dataSubscription.push(
      this.serviceApi.getDataApi('starships').subscribe({
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
      this.dataElement = this.dataElementOriginal.filter((element: Startship) => (element.name).toLowerCase().includes(data.toLowerCase()));
    }
  }
  // --------------------------------------------
  chargeAllData() {
    this.dataElement = this.dataElementOriginal
  }
  selectRow(item: Startship) {
    this.serviceApi.changeDataStartshipSelected(item)
    this.router.navigate(['/', 'starship', 'view'])
  }

  getTypeLength(value: string) {
    let lengthValue = Number.parseFloat(value)
    switch (true) {
      case lengthValue > 1000: return 'Large'
      case lengthValue <= 1000 && lengthValue >= 100: return 'Normal'
      default: return 'Small'
    }
  }
  ngOnDestroy() {
    this._dataSubscription.forEach((subscription: Subscription) => {
      subscription.unsubscribe()
    });
  }

}
