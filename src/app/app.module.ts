import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { EventsComponent } from './events/events.component';
import { CategoriesComponent } from './categories/categories.component';
import { MapComponent } from './map/map.component';
import { EventsService } from './events.service';
import { EventDetailsComponent } from './event-details/event-details.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule} from '@angular/forms';
import { CategoriesDetailsComponent } from './categories-details/categories-details.component';
import { MyCollectionComponent } from './my-collection/my-collection.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    CategoriesComponent,
    MapComponent,
    EventDetailsComponent,
    HomeComponent,
    CategoriesDetailsComponent,
    MyCollectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
