import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataServicesService } from 'src/app/core/services/data-services.service';
import { Startship } from '../../interface/starships.interface';

@Component({
  selector: 'app-view-starship',
  templateUrl: './view-starship.component.html',
  styleUrls: ['./view-starship.component.css']
})
export class ViewStarshipComponent implements OnInit {

  private _dataSubscription: Subscription[] = [];
  dataStarship?: Startship;

  constructor(private serviceApi: DataServicesService, private router: Router) { }

  ngOnInit(): void {
    let elemRoute = this.router.url.split('/');
    this.serviceApi.changeRouteActiveSelected(elemRoute[elemRoute.length - 1])

    this._dataSubscription.push(
      this.serviceApi.currentStartshipSelected.subscribe({
        next: (data: any) => {
          console.log('view starship: ', data)
          this.dataStarship = data
          if (this.dataStarship == null) {
            this.router.navigate(['/', 'starship'])
          }
        }
      })
    )
  }
  goBack() {
    this.serviceApi.changeDataStartshipSelected(null)
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
