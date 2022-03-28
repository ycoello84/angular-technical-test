import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServicesService } from 'src/app/core/services/data-services.service';

@Component({
  selector: 'app-view-films',
  templateUrl: './view-films.component.html',
  styleUrls: ['./view-films.component.css']
})
export class ViewFilmsComponent implements OnInit {

  idSelected: number = 0;
  dataSelected: any = null

  constructor(private route: ActivatedRoute, private serviceApi: DataServicesService, private router: Router) { }

  ngOnInit(): void {
    let elemRoute = this.router.url.split('/')
    this.serviceApi.changeRouteActiveSelected(elemRoute[elemRoute.length - 1])
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.idSelected = id
    console.log('Seleccionado: ', id)
    this.getInfoById();
  }

  getInfoById() {
    this.serviceApi.getDataByParams('films', this.idSelected).subscribe({
      next: (data: any) => {
        console.log('Data details -- >', data)
        this.dataSelected = data
      }
    })
  }

}
