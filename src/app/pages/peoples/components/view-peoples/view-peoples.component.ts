import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataServicesService } from 'src/app/core/services/data-services.service';

@Component({
  selector: 'app-view-peoples',
  templateUrl: './view-peoples.component.html',
  styleUrls: ['./view-peoples.component.css']
})
export class ViewPeoplesComponent implements OnInit, OnDestroy {

  private _dataSubscription: Subscription[] = [];
  dataPeople?: any = null

  constructor(private serviceApi: DataServicesService, private router: Router) { }

  ngOnInit(): void {
    let elemRoute = this.router.url.split('/')
    this.serviceApi.changeRouteActiveSelected(elemRoute[elemRoute.length - 1])
    this._dataSubscription.push(
      this.serviceApi.currentPeopleSelected.subscribe({
        next: (data: any) => {
          this.dataPeople = data
          if (this.dataPeople == null) {
            this.router.navigate(['/', 'peoples'])
          }
        }
      })
    )
  }
  getTypeHeight(value: string) {
    let height = Number.parseFloat(value)
    switch (true) {
      case height > 200: return 'Height'
      case height <= 200 && height >= 100: return 'Normal'
      default: return 'Low'
    }
  }
  goBack() {
    this.serviceApi.changeDataPeopleSelected(null)
  }
  ngOnDestroy() {
    this._dataSubscription.forEach((subscription: Subscription) => {
      subscription.unsubscribe()
    });
  }

}
