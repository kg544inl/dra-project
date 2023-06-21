import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Event } from './event';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private events: Event[] = [];
  private searchkeywordSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  searchKeyword$: Observable<string> = this.searchkeywordSubject.asObservable();

  constructor() { }

  setEvents(events: Event[]) {
    this.events = events;
    this.filterEvents('');
  }

  filterEvents(keyword: string) {
    const filteredEvents = this.events.filter(event =>
      event.title.toLowerCase().includes(keyword.toLowerCase())
    );
    this.searchkeywordSubject.next(keyword);
  }
}
