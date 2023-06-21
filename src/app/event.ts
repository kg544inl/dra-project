export interface Event {
    id: string;
    title: string;
    description: string;
    link: string;
    closed: string;
    categories: Category[];
    sources: Source[];
    geometry: Geometry[];
}

export interface Category {
    id: string;
    title: string;
  }
  
  export interface Source {
    id: string;
    url: string;
  }
  
  export interface Geometry {
    magnitudeValue: number;
    magnitudeUnit: string;
    date: string;
    type: string;
    coordinates: number[];
  }