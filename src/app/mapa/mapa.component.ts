import { Component, AfterViewInit, OnInit } from '@angular/core';
//import * as mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'

//var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

@Component({
  selector: 'app-root',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})

export class MapaComponent implements AfterViewInit, OnInit{ 
  subtitle: string;
  style = 'mapbox://styles/mapbox/outdoors-v9';
  lat = 37.75;
  lng = -122.41;
  message = 'Hello World!';

  

  // data
  source: any;
  markers: any;
  constructor() {
    this.subtitle = 'This is some text within a card block.';

  } 

  ngOnInit() {
    this.initializeMap()
  }

  private initializeMap() {
    
    /*
    mapboxgl.accessToken = 'pk.eyJ1IjoidHVyYmF5IiwiYSI6ImNqbjdoMXlnbDFsYzgza3FvenNvM3ViOTcifQ.bO64fzJo74Ier_UMoOTMvA';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10',
    center: [18.482779, -69.921755]
    }); */

  }

  ngAfterViewInit() {}
}