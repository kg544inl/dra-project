import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EventsService } from '../events.service';
import { Event } from '../event';

import { SearchService } from '../search.service';
import { FormsModule} from '@angular/forms';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  allEvents: Event[] = [];
  events: Event[] = [];
  selectedEvent?: Event;
  searchKeyword: string = '';

  constructor(
    private http: HttpClient,
     private eventsService: EventsService,
     private searchService: SearchService) { }

  ngOnInit() {
    this.http.get<any>('https://eonet.gsfc.nasa.gov/api/v3/events')
    .subscribe(response => {
      this.allEvents = response?.events || [];
      this.events = this.allEvents.slice(0,20) || [];
      this.eventsService.setEvents(this.events);
    });

    //czy na pewno tu?
    this.searchService.searchKeyword$.subscribe((keyword) => {
      this.searchKeyword = keyword;
      this.searchEvents();
    });
  }

  searchEvents() {
    const filteredEvents = this.allEvents.filter((event) =>
      event.title.toLowerCase().includes(this.searchKeyword.toLowerCase())
    );
    this.events = filteredEvents.slice(0, 20);
  }

  clearSearch() {
    this.searchKeyword = '';
    this.events = this.allEvents.slice(0, 20);
  }

  //to juz bylo

  loadMore() {
    const currentLength = this.events.length;
    const remainingEvents = this.allEvents.slice(currentLength, currentLength + 20);
    this.events = [...this.events, ...remainingEvents];
  }

  // onSelect(event: Event): void {
  //   this.selectedEvent = event;
  // }

  // dzialajace przed observable bez tego
  getEvents(): void {
    this.eventsService.getEvents()
    .subscribe(events => this.events = events);
  }


}
