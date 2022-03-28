import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataServicesService } from 'src/app/core/services/data-services.service';

@Component({
  selector: 'app-view-species',
  templateUrl: './view-species.component.html',
  styleUrls: ['./view-species.component.css']
})
export class ViewSpeciesComponent implements OnInit {

  private _dataSubscription: Subscription[] = [];
  dataSpecies?: any = null

  constructor(private serviceApi: DataServicesService, private router: Router) { }

  ngOnInit(): void {
    let elemRoute = this.router.url.split('/')
    this.serviceApi.changeRouteActiveSelected(elemRoute[elemRoute.length - 1])
    this._dataSubscription.push(
      this.serviceApi.currentSpeciesSelected.subscribe({
        next: (data: any) => {
          this.dataSpecies = data
          if (this.dataSpecies == null) {
            this.router.navigate(['/', 'species'])
          }
        }
      })
    )
  }
  goBack() {
    this.serviceApi.changeDataSpeciesSelected(null)
  }

  ngOnDestroy() {
    this._dataSubscription.forEach((subscription: Subscription) => {
      subscription.unsubscribe()
    });
  }

}
