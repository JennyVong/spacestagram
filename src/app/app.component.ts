import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchText: string = "";
  cameras: Array<string> = [
    "Front Hazard Avoidance Camera",
    "Rear Hazard Avoidance Camera",
    "Mast Camera",
    "Chemistry and Camera Complex",
    "Mars Hand Lens Imager",
    "Mars Descent Imager",
    "Navigation Camera",
    "Panoramic Camera",
    "Miniature Thermal Emission Spectrometer (Mini-TES)"
  ];
  listHidden: boolean = true;
  selectedIndex: number = -1;
  filteredList: Array<string> = [];
  likedPhotos: Array<any> = [];

  constructor (
    private router: Router,
    private dataService: DataService
  ) {
  }
  
  ngOnInit (): void {
    this.filteredList = this.cameras;
  }

  selectItem(ind: number) {
    this.searchText = this.filteredList[ind] || this.searchText;
    this.listHidden = true;
    this.selectedIndex = ind;
  }

  // navigate through the list of items
  onKeyPress (event: any): void {
      if (!this.listHidden) {
          if (event.key === 'Escape') {
              this.selectedIndex = -1;
              this.toggleListDisplay(0);
          }else if (event.key === 'Enter') {
              this.toggleListDisplay(0);
          }else if (event.key === 'ArrowDown') {
              this.listHidden = false;
              this.selectedIndex = (this.selectedIndex + 1) % this.filteredList.length;
              if (this.filteredList.length > 0 && !this.listHidden) {
                  document.getElementsByTagName('list-item')[this.selectedIndex].scrollIntoView();
              }
          } else if (event.key === 'ArrowUp') {
              this.listHidden = false;
              if (this.selectedIndex <= 0) {
                  this.selectedIndex = this.filteredList.length;
              }
              this.selectedIndex = (this.selectedIndex - 1) % this.filteredList.length;
              if (this.filteredList.length > 0 && !this.listHidden) {
              document.getElementsByTagName('list-item')[this.selectedIndex].scrollIntoView();
              }
          }
      }
  }

  toggleListDisplay(sender: number) {
    if (sender === 1) {
      this.listHidden = false;
    } else {
        // helps to select item by clicking
        setTimeout(() => {
          this.selectItem(this.selectedIndex);
          this.listHidden = true;
          this.router.navigate([''], {queryParams: {searchText: this.searchText}});
          this.dataService.setSearch(this.searchText);
        }, 500)
      }
    }
  }
