import { Component, OnInit } from '@angular/core';
import { NasaPhotosService } from '../nasa-photos.service';

@Component({
  selector: 'app-rover-photos',
  templateUrl: './rover-photos.component.html',
  providers: [NasaPhotosService],
  styleUrls: ['./rover-photos.component.scss']
})
export class RoverPhotosComponent implements OnInit {
  photo: any;
  photos: Array<any> = [];
  cols: Array<any> = [];
  gallery: Array<Array<any>> = [];
  start: number = 0;
  end: number = 0;

  constructor(
    private nasaPhotoService: NasaPhotosService,
  ) { }

  ngOnInit (): void {
    this.getPhotos();
  }

  hideloader (): void {
    const loader = document.getElementById("ring")
    if (loader) {
      loader.style.display = 'none';
    }
  }

  getPhotos (): void {
    this.nasaPhotoService.getPhotos().subscribe(res => {
      if (res) {
        this.hideloader();
      }
      this.photo = res;
      this.photos = this.photo.photos
      this.end = this.photos.length/8;
      while (this.start <= this.photos.length) {
        this.cols = this.photos.slice(this.start,this.end);
        this.start = this.end;
        this.end = this.end + this.photos.length/8;
        console.log(this.cols);
        this.gallery.push(this.cols);
      }
      console.log(this.gallery);
      console.log(this.photos);
    });
  }
}
