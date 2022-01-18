import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NasaPhotosService } from '../nasa-photos.service';
import { DataService } from '../data.service';

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
  @Input() searchText: string = "";
  @Input() likedPhotos: Array<any> = []; 

  constructor(
    private nasaPhotoService: NasaPhotosService,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) { 
    this.activatedRoute.queryParams.subscribe((params) => {
      this.searchText = params.searchText;
    });
  }

  ngOnInit (): void {
    this.getPhotos();
  }

  hideloader (): void {
    const loader = document.getElementById("loading-container")
    if (loader) {
      loader.style.display = 'none';
    }
  }

  like (photo: boolean, id: number): void {
    // check if photo has been initialized before - if not, create value
    if (photo) {
      photo = !photo;
    } else {
      photo = true;
    }
    
    // find photo in photos array to assign liked property value
    this.photos.find(photo => photo.id == id).liked = photo;

    // save in local storage as a database
    localStorage.setItem('photos', JSON.stringify(this.photos));

    // save array of liked photos into local storage
    if (photo == true) {
      this.likedPhotos.push(this.photos.find(photo => photo.id == id));
    } else {
      this.likedPhotos.splice(this.likedPhotos.findIndex(photo => photo.id == id), 1);
    }
    localStorage.setItem('likedPhotos', JSON.stringify(this.likedPhotos));
    //this.router.navigate(['/liked-photos'], {queryParams: {likedPhotos: this.likedPhotos}});

    // pass data to liked-photos component - both liked photos and all photos
    const changedPhotos = localStorage.getItem('photos');
    if (changedPhotos) {
      this.dataService.setPhotos(JSON.parse(changedPhotos));
    }

    const liked = localStorage.getItem('likedPhotos');
    if (liked) {
      this.dataService.setArray(JSON.parse(liked));
    } else {
      this.dataService.setArray([]);
    }
  }

  getPhotos (): void {
    this.nasaPhotoService.getPhotos().subscribe(res => {
      if (res) {
        this.hideloader();
      }
      this.photo = res;
      this.photos = this.photo.photos

      // check if existing local storage exists for photos - if not, create one
      const savedPhotos = localStorage.getItem('photos');

      if (!savedPhotos) {
        localStorage.setItem('photos', JSON.stringify(this.photos));
      } else {
        // assign photos array to existing local storage
        this.photos = JSON.parse(savedPhotos);
        this.dataService.setPhotos(this.photos);
      }

      this.end = this.photos.length/8;
      while (this.start <= this.photos.length) {
        this.cols = this.photos.slice(this.start,this.end);
        this.start = this.end;
        this.end = this.end + this.photos.length/8;
        this.gallery.push(this.cols);
      }

      // set up liked photos array with past data
      this.photos.filter((photo) => {
        if (photo.liked == true) {
          this.likedPhotos.push(photo);
        }
      })
      localStorage.setItem('likedPhotos', JSON.stringify(this.likedPhotos));
      this.dataService.setArray(this.likedPhotos);
    })
  }
}
