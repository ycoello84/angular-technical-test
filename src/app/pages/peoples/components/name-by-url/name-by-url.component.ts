import { Component, OnInit, Input } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import { DataServicesService } from 'src/app/core/services/data-services.service';

@Component({
  selector: 'app-name-by-url',
  templateUrl: './name-by-url.component.html',
  styleUrls: ['./name-by-url.component.css']
})
export class NameByUrlComponent implements OnInit {

  @Input() dir!: any;

  $dataNamePlanet?: Observable<any>

  constructor(private serviceApi: DataServicesService) { }

  ngOnInit(): void {
    this.$dataNamePlanet = this.serviceApi.getPlanetNameByURL(this.dir).pipe(map((res: any) => res.name))
  }

}
