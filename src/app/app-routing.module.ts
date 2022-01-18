import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LikedPhotosComponent } from './liked-photos/liked-photos.component';
import { RoverPhotosComponent } from './rover-photos/rover-photos.component';

const routes: Routes = [
  { path: 'liked-photos', component: LikedPhotosComponent },
  { path: '', component: RoverPhotosComponent,  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
