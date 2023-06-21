import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { CategoriesComponent } from './categories/categories.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { HomeComponent } from './home/home.component';
import { CategoriesDetailsComponent } from './categories-details/categories-details.component';
import { MyCollectionComponent } from './my-collection/my-collection.component';

const routes: Routes = [
  {path: 'events', component: EventsComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'detail/:id', component: EventDetailsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'c-detail/:id', component: CategoriesDetailsComponent},
  {path: 'mycollection', component: MyCollectionComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
