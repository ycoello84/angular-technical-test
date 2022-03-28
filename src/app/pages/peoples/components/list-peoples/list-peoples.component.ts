import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from, fromEvent, map, Observable, Subscription } from 'rxjs';
import { pluck } from 'rxjs/operators'
import { DataServicesService } from 'src/app/core/services/data-services.service';
import { People } from '../../interface/people.interface';

@Component({
  selector: 'app-list-peoples',
  templateUrl: './list-peoples.component.html',
  styleUrls: ['./list-peoples.component.css']
})
export class ListPeoplesComponent implements OnInit, OnDestroy {

  private _dataSubscription: Subscription[] = [];
  dataElement: People[] = [];
  dataElementOriginal: People[] = [];
  rutaActive = '';
  filterActive = false;
  lastFilter: any = null;

  constructor(private serviceApi: DataServicesService, private router: Router) { }

  ngOnInit(): void {
    let elemRoute = this.router.url.split('/')
    this.serviceApi.changeRouteActiveSelected(elemRoute[elemRoute.length - 1])
    this.rutaActive = elemRoute[elemRoute.length - 1]

    this._dataSubscription.push(
      this.serviceApi.getDataApi('people').subscribe({
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

  getTypeHeight(value: string) {
    let height = Number.parseFloat(value)
    switch (true) {
      case height > 200: return 'Height'
      case height <= 200 && height >= 100: return 'Normal'
      default: return 'Low'
    }
  }

  selectRow(item: any) {
    this.serviceApi.changeDataPeopleSelected(item)
    this.router.navigate(['/', 'peoples', 'view'])
  }

  ngOnDestroy() {
    this._dataSubscription.forEach((subscription: Subscription) => {
      subscription.unsubscribe()
    });
  }

}
