import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { NasaPhoto } from './nasa-photos/photo';

@Injectable({
  providedIn: 'root'
})
export class NasaPhotosService {
  roverUrl: string = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=bVySGZKtUFyn5GLPPxpSsG8IcKgb9lIKFtF5uaN8'

  constructor(
    private http: HttpClient,
  ) { }

  getPhotos() {
    const photos = this.http.get<NasaPhoto[]>(this.roverUrl);
    console.log(photos);
    return photos;
  }
}
