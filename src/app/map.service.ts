import { Injectable } from '@angular/core';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private map!: L.Map;

  constructor() { }

  initializeMap() {
    this.map = L.map('map', {
      center: [0, 0],
      zoom: 4,
      attributionControl: false
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors',
      maxZoom: 18
    }).addTo(this.map);
  }

  //przed
  // addMarker(coordinates: number[]) {
  //   const latLngcord: L.LatLngTuple = [coordinates[1], coordinates[0]];
  //   L.marker(latLngcord).addTo(this.map);
  // }

  addMarker(coordinates: number[], category: string) {
    console.log(category);
    const latLngcord: L.LatLngTuple = [coordinates[1], coordinates[0]];
    let iconUrl = '';

    if (category === 'Drought') {
      iconUrl = 'assets/icons/drought-icon.png';
    } else if (category === 'Dust and Haze') {
      iconUrl = 'assets/icons/dust-icon.png';
    } else if (category === 'Earthquakes') {
      iconUrl = 'assets/icons/earthquake-icon.png';
    } else if (category === 'Floods') {
      iconUrl = 'assets/icons/flood-icon.png';
    } else if (category === 'Landslides') {
      iconUrl = 'assets/icons/landslide-icon.png';
    } else if (category === 'Manmade') {
      iconUrl = 'assets/icons/manmade-icon.png';
    } else if (category === 'Sea and Lake Ice') {
      iconUrl = 'assets/icons/iceberg-icon.png';
    } else if (category === 'Severe Storms') {
      iconUrl = 'assets/icons/storm-icon.png';
    } else if (category === 'Snow') {
      iconUrl = 'assets/icons/ice-icon.png';
    } else if (category === 'Temperature Extremes') {
      iconUrl = 'assets/icons/hot-icon.png';
    } else if (category === 'Volcanoes') {
      iconUrl = 'assets/icons/volacano-icon.png';
    } else if (category === 'Water Color') {
      iconUrl = 'assets/icons/water-icon.png';
    } else if (category === 'Wildfires') {
      iconUrl = 'assets/icons/wildfire-icon.png';
    }

    const customIcon = L.icon({
      iconUrl: iconUrl,
      iconSize: [20, 20],
      iconAnchor: [16, 32]
    });

    L.marker(latLngcord, { icon: customIcon }).addTo(this.map);
  }

  deleteMarker(coordinates: number[]) {
    const latLngcord: L.LatLngTuple = [coordinates[1], coordinates[0]];
    this.map.eachLayer(layer => {
      if (layer instanceof L.Marker) {
        const marker = layer as L.Marker;
        const markerLatLng = marker.getLatLng();
        if (markerLatLng.lat === latLngcord[0] && markerLatLng.lng === latLngcord[1]) {
          this.map.removeLayer(marker);
        }
      }
    });
  }
}
