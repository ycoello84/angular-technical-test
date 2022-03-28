import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, delay, distinctUntilChanged, map, mergeMap, of } from 'rxjs';
import { DataServicesService } from 'src/app/core/services/data-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  formSearch!: FormGroup;
  listRoutes: string[] = ['films', 'peoples', 'planets', 'species', 'starship', 'vehicles'];
  allElementsSearch: any[] = [];
  elementSearchs: any[] = [];
  activeSearchOptions = false;
  routeActive = '';


  constructor(private formBuilder: FormBuilder, private serviceApi: DataServicesService, private router: Router) {
    this.reactiveForm();
  }

  ngOnInit(): void {
    // let elemRoute = this.router.url.split('/')
    // this.serviceApi.changeRouteActiveSelected(elemRoute[elemRoute.length - 1])
    // this.routeActive = elemRoute[elemRoute.length - 1];
    // console.log('Data search data header current add 00: ', this.routeActive)
    this.ruteActive();
    this.listenChanges();
    this.changesElementsSearch();

  }
  // 
  ruteActive() {
    this.serviceApi.currentRouteActive.subscribe({
      next: (data: string) => {
        console.log('Data search data header current add currentRouteActive: ', data)
        if (this.listRoutes.includes(data) == true) {
          this.activeSearchOptions = false;
          this.formSearch.controls['search'].enable();
          this.routeActive = data
        } else {
          this.activeSearchOptions = true;
          this.formSearch.controls['search'].disable();
          this.routeActive = ''
        }
      }
    })
  }
  // ---------------------------------------------------------------------------
  changesElementsSearch() {
    this.serviceApi.currentDataFilter.subscribe({
      next: (data: any) => {
        this.addElementToSearch(data);
      }
    })
  }
  // ----------------------------------------------------------
  addElementToSearch(data: any) {
    if (data != null && data != '') {
      this.addDataToList(data)
    }
  }

  // ----------------------
  existElement(data: { word: string, rute: string }): boolean {
    let flag = false;
    if (this.elementSearchs.length == 0) {
      return flag
    } else {
      this.elementSearchs.forEach((item: { word: string, rute: string }) => {
        if (data.word == item.word) {
          flag = true
        }
      });
      return flag
    }
  }
  // ---------------
  addDataToList(data: { word: string, rute: string }) {
    if (this.existElement(data) == false) {

      if (this.elementSearchs.length < 4) {
        this.elementSearchs.push(data)
      } else {
        let temp = [];
        for (let index = 1; index < this.elementSearchs.length; index++) {
          const element = this.elementSearchs[index];
          temp.push(element)
        }
        temp.push(data)
        this.elementSearchs = temp;
      }
    }
  }
  // ----------------------
  filterData(data: string) {
    this.serviceApi.changeDataFilterSelected({ word: data, rute: this.routeActive })
  }
  // ----------------------
  selectSearch(item: { word: string, rute: string }) {
    console.log('Item selected: ', this.routeActive, item)
    if (item.rute == this.routeActive) {
      this.serviceApi.changeDataFilterSelected(item)
    } else {
      this.router.navigate(['/', item.rute])
      this.serviceApi.changeDataFilterSelected(item)
    }


  }
  // ----------------------
  reactiveForm() {
    this.formSearch = this.formBuilder.group({
      search: [''],
    })
  }
  // ----------------------
  listenChanges() {
    this.formSearch.get('search')?.valueChanges.pipe(
      map(event => event),
      debounceTime(1000),
      distinctUntilChanged(),
      mergeMap(search => of(search).pipe(
        delay(500),
      )),
    ).subscribe((data: any) => {

      this.filterData(data)

    });
  }

}
