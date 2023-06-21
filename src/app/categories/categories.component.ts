import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from '../event';
import { EventsService } from '../events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories: any[] = [];
  categoryEvents: Event[] = [];

  constructor(private http: HttpClient,
    private eventService: EventsService,
    private router: Router) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.http.get<any>('https://eonet.gsfc.nasa.gov/api/v3/categories')
    .subscribe(response => {
      this.categories = response?.categories || [];
    });
  }

  // getEventsByCategory() {
  //   this.http.get<any>("https://eonet.gsfc.nasa.gov/api/v3/events/geojson?category=")
  //   .subscribe(response => {
  //     this.categoryEvents = response?.categoryEvents || [];
  //   });
  // }

  //
  // navigateToCategoryDetails(categoryId: string) {
  //   this.router.navigate(['c-detail', categoryId]);
  // }

  
  
}
