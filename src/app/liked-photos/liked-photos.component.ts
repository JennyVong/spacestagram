import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-liked-photos',
  templateUrl: './liked-photos.component.html',
  styleUrls: ['./liked-photos.component.scss']
})
export class LikedPhotosComponent implements OnInit {
  @Input() likedPhotos: Array<any> = [];
  @Input() photos: Array<any> = [];
  @Input() searchText: string = '';

  constructor(
    private dataService: DataService,
  ) {
   }

  ngOnInit(): void {
    this.likedPhotos = this.dataService.getArray();
    this.photos = this.dataService.getPhotos();
    this.searchText = this.dataService.getSearch();
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

    // pass data to liked-photos component
    const liked = localStorage.getItem('likedPhotos');
    if (liked) {
      this.dataService.setArray(this.likedPhotos);
    } else {
      this.dataService.setArray([]);
    }
  }

}
