import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EventsService } from '../events.service';
import { Event } from '../event';
import { MapService } from '../map.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  events: Event[] = [];

  constructor(private http: HttpClient,private eventsService: EventsService, private mapService: MapService) {}

  ngOnInit() {
    this.http.get<any>('https://eonet.gsfc.nasa.gov/api/v3/events')
    .subscribe(response => {
      this.events = response?.events.slice(0,20) || [];
      this.eventsService.setEvents(this.events);
    });
  }

  // getEvents(){
  //   this.eventsService.getEvents()
  //   .subscribe(events => this.events = events);
  // }
  // onSelect(event: Event): void {
  //   this.selectedEvent = event;
  // }
  
  checkboxChange(event: any, eventItem: Event) {
    if (event.target.checked) {
      this.addMarkers(eventItem);
    } else {
      this.deleteMarkers(eventItem);
    }
  }

  addMarkers(event: Event) {
    event.geometry.forEach(geometry => {
      const point = geometry.coordinates || [];
      this.mapService.addMarker(point, event.categories[0].title);
      });
  }

  deleteMarkers(event: Event) {
    event.geometry.forEach(geometry => {
      const point = geometry.coordinates || [];
      this.mapService.deleteMarker(point);
      });
  }
}
