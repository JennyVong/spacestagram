import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  likedPhotos: Array<any> = [];
  photos: Array<any> = [];
  searchText: string = "";

  constructor() { }

  setArray (liked: Array<any>): void {
    this.likedPhotos = liked;
  }

  getArray (): Array<any> {
    return this.likedPhotos;
  }

  setPhotos (all: Array<any>): void {
    this.photos = all;
  }

  getPhotos (): Array<any> {
    return this.photos;
  }

  setSearch (search: string): void {
    this.searchText = search;
  }

  getSearch (): string {
    return this.searchText;
  }
}
