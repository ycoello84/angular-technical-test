import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {


  public routerLinkFilms = "/films";
  public routerLinkPeoples = "/peoples";

  public optionsMenu = [
    {
      name: 'Films', linkDir: '/films'
    },
    {
      name: 'Peoples', linkDir: '/peoples'
    },
    {
      name: 'Planets', linkDir: '/planets'
    },
    {
      name: 'Species', linkDir: '/species'
    },
    {
      name: 'Starship', linkDir: '/starship'
    },
    {
      name: 'Vehicles', linkDir: '/vehicles'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
