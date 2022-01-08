import { Component, OnInit } from '@angular/core';
import { NasaPhoto } from './photo';
import { NasaPhotosService } from '../nasa-photos.service';

@Component({
  selector: 'app-nasa-photos',
  templateUrl: './nasa-photos.component.html',
  providers: [NasaPhotosService],
  styleUrls: ['./nasa-photos.component.scss']
})
export class NasaPhotosComponent implements OnInit {
  photo: any;
  photos: Array<any> = [];

  constructor(
    private nasaPhotoService: NasaPhotosService,
  ) { }

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos(): void {
    this.nasaPhotoService.getPhotos().subscribe(res => {
      console.log(res);
      this.photo = res;
      this.photos = this.photo.photos
      console.log(this.photos);
    });
  }
}
