import { Component, Input } from '@angular/core';
import { Event } from '../event';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-categories-details',
  templateUrl: './categories-details.component.html',
  styleUrls: ['./categories-details.component.css']
})
export class CategoriesDetailsComponent {
  event: Event[] = [];
  categoryId: string = '';
  categoryEvents: Event[] = [];

  constructor(
    private route: ActivatedRoute,
    private eventService: EventsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.categoryId = this.route.snapshot.paramMap.get('id') || '';
    this.eventService.getEventsByCategory(this.categoryId)
      .subscribe(event => this.event = event);
  }
  

  // ngOnInit() {
  //   this.route.paramMap.subscribe(params => {
  //     const categoryId = params.get('id');
  //     if (categoryId) {
  //       this.getEventsByCategory(categoryId);
  //     }
  //   });
  // }

  // getEventsByCategory(categoryId: string) {
  //   this.eventService.getEventsByCategory(categoryId)
  //     .subscribe(events => {
  //       this.categoryEvents = events;
  //     });
  // }
  

  goBack(): void {
    this.location.back();
  }
}
