import { Injectable } from '@angular/core';
import { Event } from './event';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { EventsComponent } from './events/events.component';


import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private events: Event[] = [];
  private categoryEvents: Event[] = [];
  // selectedEvent?: Event;

  constructor(private http: HttpClient) {}

  setEvents(events: Event[]) {
    this.events = events;
  }

  setCategoryEvents(category: Event[]) {
    this.categoryEvents = category;
  }

  // dzialajace przed observable
  // getEvents() {
  //   return this.events;
  // }

  getEvents(): Observable<Event[]> {
    return of(this.events);
  }

  // showDetails(event: Event){
  //   this.selectedEvent = event;
  // }

  //przed tym dzialalo
  getEvent(id: string): Observable<Event> {
    const event = this.events.find(e => e.id === id)!;
    // console.log(event);
    return of(event);
  }

  // getEventsByCategory(id: string): Observable<Event[]> {
  //   const cevents = this.http.get<Event[]>('https://eonet.gsfc.nasa.gov/api/v3/events?category=' + id);
  //   // return of(cevents);
  //   console.log(cevents);
  //   return cevents;
  // }


  getEventsByCategory(id: string): Observable<Event[]> {
    return this.http.get<Event[]>('https://eonet.gsfc.nasa.gov/api/v3/events?category=' + id)
      .pipe(
        map(response => response)
      );
  }
  

  addToCollection(eventData: any) {
    const url = 'http://localhost:8080/api/events';

    this.http.post(url, eventData).subscribe({
      next: (response) => {
        console.log('Event added successfully:', response);
      },
      error: (error) => {
        console.error('Failed to add event:', error);
      }
    });
  }

  getMyEvents(): Observable<any[]> {
    const result = this.http.get<any>(`http://localhost:8080/api/events`);
    console.log(result);
    return result;
  }
}
