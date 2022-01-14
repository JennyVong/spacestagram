import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { NasaPhoto } from './rover-photos/photo';

@Injectable({
  providedIn: 'root'
})
export class NasaPhotosService {
  roverUrl: string = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=FzT7HtQ9YKkH70Iho7HgyCklTpE8y6XYJVDv7O3Y'

  constructor(
    private http: HttpClient,
  ) { }

  getPhotos() {
    const photos = this.http.get<NasaPhoto[]>(this.roverUrl);
    console.log(photos);
    return photos;
  }
}
