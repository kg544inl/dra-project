import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-collection',
  templateUrl: './my-collection.component.html',
  styleUrls: ['./my-collection.component.css']
})
export class MyCollectionComponent implements OnInit {
  events: any[] = [];

  // constructor(private eventService: EventsService) {}

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.eventService.getMyEvents().subscribe(
    //   (response) => {
    //     this.events = response;
    //   },
    //   (error) => {
    //     console.error('error while connecting to database', error);
    //   }
    // );

    this.http.get<any>('http://localhost:8080/api/events').subscribe(data => {
      this.events = data._embedded.events;
    });
  }
}
