import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServicesService } from 'src/app/core/services/data-services.service';

@Component({
  selector: 'app-view-vehicles',
  templateUrl: './view-vehicles.component.html',
  styleUrls: ['./view-vehicles.component.css']
})
export class ViewVehiclesComponent implements OnInit {

  constructor(private serviceApi: DataServicesService, private router: Router) { }

  ngOnInit(): void {
    let elemRoute = this.router.url.split('/')
    this.serviceApi.changeRouteActiveSelected(elemRoute[elemRoute.length - 1])
  }

}
