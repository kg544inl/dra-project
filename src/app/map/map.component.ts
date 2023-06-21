import { Component, OnInit } from '@angular/core';

import { EventsService } from '../events.service';
import * as L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

import { HomeComponent } from '../home/home.component';
import { Event } from '../event';
import { MapService } from '../map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  // map!: L.Map;
  events: Event[] = [];
  // events = Event;

  constructor(private eventsService: EventsService, private mapService: MapService) {}

  // dzialajace przed observable
  // ngOnInit() {
  //   this.initializeMap();
  //   this.events = this.eventsService.getEvents();
  //   this.addMarkersToMap();
  // }

  ngOnInit() {
    this.mapService.initializeMap();
    this.eventsService.getEvents().subscribe(events => {
      this.events = events;
      // this.addMarkersToMap();
    });
  }

  // addMarkersToMap() {
  //   this.events.forEach(event => {
  //     event.geometry.forEach(geometry =>{
  //       const point = geometry.coordinates || [];
  //       this.mapService.addMarker(point);
  //     })
      
  //   });
  // }
}
