import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataServicesService } from 'src/app/core/services/data-services.service';

@Component({
  selector: 'app-view-planets',
  templateUrl: './view-planets.component.html',
  styleUrls: ['./view-planets.component.css']
})
export class ViewPlanetsComponent implements OnInit, OnDestroy {

  private _dataSubscription: Subscription[] = [];
  dataPlanet?: any = null

  constructor(private serviceApi: DataServicesService, private router: Router) { }

  ngOnInit(): void {
    let elemRoute = this.router.url.split('/')
    this.serviceApi.changeRouteActiveSelected(elemRoute[elemRoute.length - 1])
    this._dataSubscription.push(
      this.serviceApi.currentPlanetsSelected.subscribe({
        next: (data: any) => {
          this.dataPlanet = data
          if (this.dataPlanet == null) {
            this.router.navigate(['/', 'planets'])
          }
        }
      })
    )
  }
  goBack() {
    this.serviceApi.changeDataPlanetSelected(null)
  }

  ngOnDestroy() {
    this._dataSubscription.forEach((subscription: Subscription) => {
      subscription.unsubscribe()
    });
  }


}
