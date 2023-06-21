import { Component, Input } from '@angular/core';

import { Event } from '../event';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { EventsService } from '../events.service';
// import { }

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent  {
  @Input() event?: Event;
  // eventData: any;
  
  constructor(
    private route: ActivatedRoute,
    private eventService: EventsService,
    private location: Location
  ) {}

  // przed tym dzialalo
  ngOnInit(): void {
    this.getEvent();
    // console.log(this.route);
  }

  getEvent(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    // console.log(id);
    this.eventService.getEvent(id)
    .subscribe(event => this.event = event);
  }

  goBack(): void {
    this.location.back();
  }

  addToCollection() {
    console.log(this.event);
    // any = new Object(this.event.id, )
    this.eventService.addToCollection(this.event);
  }
}
