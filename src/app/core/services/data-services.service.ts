import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, pluck, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {

  urlDir = 'https://swapi.dev/api/';

  private peopleSelected = new BehaviorSubject<any>(null)
  currentPeopleSelected = this.peopleSelected.asObservable();

  private planetsSelected = new BehaviorSubject<any>(null)
  currentPlanetsSelected = this.planetsSelected.asObservable();

  private speciesSelected = new BehaviorSubject<any>(null)
  currentSpeciesSelected = this.speciesSelected.asObservable();

  private vehiclesSelected = new BehaviorSubject<any>(null)
  currentVehiclesSelected = this.vehiclesSelected.asObservable();

  private startshipSelected = new BehaviorSubject<any>(null)
  currentStartshipSelected = this.startshipSelected.asObservable();

  private dataFilter = new BehaviorSubject<any>(null)
  currentDataFilter = this.dataFilter.asObservable();

  private routeActive = new BehaviorSubject<string>('films')
  currentRouteActive = this.routeActive.asObservable();

  constructor(private http: HttpClient) { }

  getDataApi(dataInfo: string) {
    return this.http.get(this.urlDir + dataInfo);
  }
  getDataByParams(dataInfo: string, id: number) {
    return this.http.get(this.urlDir + dataInfo + '/' + id);
  }
  getPlanetNameByURL(dataUrl: string) {
    return this.http.get(dataUrl)
  }
  changeDataPeopleSelected(data: any) {
    this.peopleSelected.next(data)
  }
  changeDataPlanetSelected(data: any) {
    this.planetsSelected.next(data)
  }
  changeDataSpeciesSelected(data: any) {
    this.speciesSelected.next(data)
  }
  changeDataVehiclesSelected(data: any) {
    this.vehiclesSelected.next(data)
  }
  changeDataStartshipSelected(data: any) {
    this.startshipSelected.next(data)
  }
  changeDataFilterSelected(data: any) {
    this.dataFilter.next(data)
  }
  changeRouteActiveSelected(data: any) {
    this.routeActive.next(data)
  }
}
